import { FETCH_API_REQUEST, FETCH_API_SUCCESS, FETCH_API_FAILURE, FETCH_PRODUCT, FETCH_CATEGORY, FETCH_DATA_OF_CATEGORY } from "./actionTypes";
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

export const fetchProductData = (url) => {
    return (dispatch) => {
        dispatch(fetchApiRequest())
        axios
            .get(url)
            .then(res => dispatch(fetchProduct(res.data)))
            .catch(err => fetchApiFailure(err.message))
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
