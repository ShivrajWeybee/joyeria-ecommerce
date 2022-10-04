import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchApis, fetchProductData } from '../redux/action';

function ProductDetail({ productData, fetchProduct }) {

    const param = useParams();
    const [productId, setproductId] = useState(param.productId);

    useEffect(() => {
        console.log(productId)
    }, [])

    useEffect(() => {
        console.log(productId);
        fetchProduct(productId)
    }, [])

    // console.log(productId)
    // console.log(!props.productData.loading ? props.productData.apiData : 'loading...')
    return (
        <div>
            {
                productData.loading ? <p>Loading...</p> :
                    productData.productData?.data ?
                        <div className='productDetail-container flex'>
                            <div className='product-img_container'>
                                <img
                                    src={productData.productData.data.base_image.large_image_url}
                                    alt='product'
                                />
                            </div>
                            <div className='product-info_container'>
                                <h1 className='product-title'>{productData.productData.data.name}</h1>
                                <p className='product-price'>{productData.productData.data.formated_price}</p>
                                <hr />
                                <p className='product-desc'>{productData.productData.data.description}</p>
                                <button className='product-btn'>Add to Cart</button>
                                <button className='product-btn'>Add to favourite</button>
                            </div>
                            {/* <p>
                            {
                                productData.apiData.data.categories[0].category_id
                            }
                        </p> */}
                            {/* <img src={props.productData.apiData.data.base_image.medium_image_url} alt='product' /> */}
                            {/* <h2>{props.productData.apiData.data.name}</h2>
                        <p>{props.productData.apiData.data.name}</p>
                        <p>{props.productData.apiData.data.description}</p>
                        <p>{props.productData.apiData.data.reviews.total_rating}</p>
                        {
                            props.productData.apiData.data.categories.map((category, index) => <p key={index}>{category.name}</p>)
                        } */}
                        </div> : ''
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        productData: state,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchProduct: (productId) => dispatch(fetchProductData(`https://kamaraapi.weybee.in/api/products/${productId}`))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)
