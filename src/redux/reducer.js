import { FETCH_API_REQUEST, FETCH_API_SUCCESS, FETCH_API_FAILURE, FETCH_CATEGORY, FETCH_PRODUCT, FETCH_PRODUCTS_FROM_CATEGORY, FETCH_HOMEPAGE_BANNER, ADD_TO_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY, REMOVE_FROM_CART, COLLECTION_BANNER, ONE_IMAGE, TWO_IMAGE, ADD_TO_FAVOURITE, REMOVE_TO_FAVOURITE, OPEN_CART, CLOSE_CART, SET_TOTAL } from "./actionTypes";

const initialState = {
    loading: true,
    loadingBanner: true,
    apiData: [],
    error: '',
    categoryData: [],
    productData: [],
    categoryProducts: [],
    cart: [],
    favourite: [],
    banners: [],
    collections: [],
    oneImage: [],
    twoImage: [],
    isCartOpen: false,
    total: 0,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_API_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case FETCH_API_SUCCESS:
            return {
                ...state,
                loading: false,
                apiData: action.payload,
            }

        case FETCH_API_FAILURE:
            return {
                ...state,
                loading: false,
                apiData: [],
                categoryData: [],
                productData: [],
                categoryProducts: [],
                error: action.payload,
            }

        case FETCH_PRODUCT:
            return {
                ...state,
                loading: false,
                productData: action.payload,
            }

        case FETCH_CATEGORY:
            return {
                ...state,
                loading: false,
                categoryData: action.payload,
            }

        case FETCH_PRODUCTS_FROM_CATEGORY:
            return {
                ...state,
                loading: false,
                categoryProducts: action.payload,
            }

        case FETCH_HOMEPAGE_BANNER:
            return {
                ...state,
                loading: false,
                banners: action.payload,
                // banners: { ...state.banners, type: action.typeOfBanner, bannerData: action.payload }
            }

        case COLLECTION_BANNER:
            return {
                ...state,
                loading: false,
                collections: action.payload
            }

        case ONE_IMAGE:
            return {
                ...state,
                loading: false,
                oneImage: action.payload
            }

        case TWO_IMAGE:
            return {
                ...state,
                loading: false,
                twoImage: action.payload
            }

        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }

        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item, index) => (item.Item.id !== action.payload)),
            }

        case SET_TOTAL:
            return {
                ...state,
                total: state.cart.reduce((acc, i) => acc + (i.Item?.price * i.quantity), 0)
            }

        case ADD_TO_FAVOURITE:
            console.log("reducer reached")
            return {
                ...state,
                favourite: [...state.favourite, action.payload],
            }

        case REMOVE_TO_FAVOURITE:
            return {
                ...state,
                favourite: state.favourite.filter((item, index) => (item.id !== action.payload))
            }

        case INCREMENT_QUANTITY:
            return {
                ...state,
                cart: state.cart.map((item, index) => {
                    if (item.Item.id === action.payload) {
                        return { ...item, quantity: item.quantity + 1 }
                    }
                    return item
                }),
                total: state.cart.reduce((acc, i) => acc + (i.Item.price * i.quantity), 0)
            }

        case DECREMENT_QUANTITY:
            return {
                ...state,
                cart: state.cart.map((item, index) => {
                    if (item.Item.id === action.payload) {
                        return { ...item, quantity: item.quantity - 1 }
                    }
                    return item
                }),
                total: state.cart.reduce((acc, i) => acc + (i.Item.price * i.quantity), 0)
            }

        case OPEN_CART:
            return {
                ...state,
                isCartOpen: true,
            }

        case CLOSE_CART:
            return {
                ...state,
                isCartOpen: false,
            }

        default:
            return state
    }
}

export default reducer
