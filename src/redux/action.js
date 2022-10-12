import { FETCH_API_REQUEST, FETCH_API_SUCCESS, FETCH_API_FAILURE, FETCH_PRODUCT, FETCH_CATEGORY, FETCH_PRODUCTS_FROM_CATEGORY, FETCH_HOMEPAGE_BANNER, ADD_TO_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY, REMOVE_FROM_CART, COLLECTION_BANNER } from "./actionTypes";
import axios from "axios";

export const fetchApiRequest = () => {
    console.log("API request")
    return {
        type: FETCH_API_REQUEST,
    }
}

export const fetchApiSuccess = (data) => {
    console.log("API success")
    return {
        type: FETCH_API_SUCCESS,
        payload: data,
    }
}

export const fetchApiFailure = (error) => {
    console.log("API error")
    return {
        type: FETCH_API_FAILURE,
        payload: error,
    }
}

export const fetchCategoryData = (data) => {
    return {
        type: FETCH_CATEGORY,
        payload: data,
    }
}

export const fetchProduct = (data) => {
    return {
        type: FETCH_PRODUCT,
        payload: data,
    }
}

export const fetchProductsFromCategory = (data) => {
    console.log('products from category')
    return {
        type: FETCH_PRODUCTS_FROM_CATEGORY,
        payload: data,
    }
}

export const fetchHomepageBannerData = (data) => {
    console.log("banners coming...")
    return {
        type: FETCH_HOMEPAGE_BANNER,
        payload: data,
    }
}

export const fetchCollectionBannerData = (data) => {
    return {
        type: COLLECTION_BANNER,
        payload: data,
    }
}

export const addToCartData = (data) => {
    return {
        type: ADD_TO_CART,
        payload: data,
    }
}

export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        payload: id,
    }
}

export const incrementQuantity = (id, qCount) => {
    return {
        type: INCREMENT_QUANTITY,
        payload: id,
        count: qCount,
    }
}

export const decrementQuantity = (id, qCount) => {
    return {
        type: DECREMENT_QUANTITY,
        payload: id,
        count: qCount
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const fetchProductsFromCategoryAction = (url) => {
    return (dispatch) => {
        dispatch(fetchApiRequest())
        axios
            .get(url)
            .then(res => dispatch(fetchProductsFromCategory(res.data)))
            .catch(err => dispatch(fetchApiFailure(err.message)))
    }
}

export const fetchProductData = (url) => {
    return (dispatch) => {
        dispatch(fetchApiRequest())
        axios
            .get(url)
            .then(res => dispatch(fetchProduct(res.data)))
            .catch(err => dispatch(fetchApiFailure(err.message)))
    }
}

export const fetchCategory = (url) => {
    return (dispatch) => {
        dispatch(fetchApiRequest())
        axios
            .get(url)
            .then(res => dispatch(fetchCategoryData(res.data)))
            .catch(err => dispatch(fetchApiFailure(err.message)))
    }
}

export const fetchApis = (url) => {
    return (dispatch) => {
        dispatch(fetchApiRequest())
        axios
            .get(url)
            .then(res => {
                console.log(res.data)
                dispatch(fetchApiSuccess(res.data))
            })
            .catch(err => dispatch(fetchApiFailure(err.message)))
    }
}

export const fetchHomepageBanner = (url) => {
    return (dispatch) => {
        dispatch(fetchApiRequest())
        axios
            .get(url)
            .then(res => dispatch(fetchHomepageBannerData(res.data)))
            .catch(err => dispatch(fetchApiFailure(err.message)))
    }
}
// export const fetchHomepageBanner = (url) => {
//     return (dispatch) => {
//         dispatch(fetchApiRequest())
//         axios
//             .get(url)
//             .then(res => res.data.data.map(type =>
//                 axios.get(`https://kamaraapi.weybee.in/api/homepage?type=${type}`)
//                     .then(resC => dispatch(fetchHomepageBannerData(resC.data, type)))
//             ))
//             .catch(err => dispatch(fetchApiFailure(err.message)))
//     }
// }
export const fetchCollectionBanner = (url) => {
    return (dispatch) => {
        dispatch(fetchApiRequest())
        axios
            .get(url)
            .then(res => dispatch(fetchCollectionBannerData(res.data)))
            .catch(err => dispatch(fetchApiFailure(err.message)))
    }
}
