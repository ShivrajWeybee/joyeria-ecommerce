import { FETCH_API_REQUEST, FETCH_API_SUCCESS, FETCH_API_FAILURE, FETCH_CATEGORY, FETCH_PRODUCT, FETCH_PRODUCTS_FROM_CATEGORY, FETCH_HOMEPAGE_BANNER } from "./actionTypes";

const initialState = {
    loading: true,
    apiData: [],
    error: '',
    categoryData: [],
    productData: [],
    categoryProducts: [],
    cart: [],
    favourite: [],
    banners: [],
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
            }

        default:
            return state
    }
}

export default reducer
