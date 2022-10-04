import { FETCH_API_REQUEST, FETCH_API_SUCCESS, FETCH_API_FAILURE, FETCH_CATEGORY, FETCH_PRODUCT, FETCH_DATA_OF_CATEGORY } from "./actionTypes";

const initialState = {
    loading: true,
    apiData: [],
    error: '',
    categoryData: [],
    productData: []
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

        default:
            return state
    }
}

export default reducer
