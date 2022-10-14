import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'
import { addToCartData, addToFavouriteData, fetchProductData } from '../redux/action';
import { Loader } from './Loader';

function ProductDetail({ productData, fetchProduct, addToCartProduct, addToFavouriteProduct }) {

    const handleAddToCart = () => {
        productData.cart.length === 0 ? addToCartProduct({ Item: productData.productData.data, quantity: 1 }) :
            (productData.cart.find(item => item.Item.id === productData.productData.data.id)) ? console.log("hh") : addToCartProduct({ Item: productData.productData.data, quantity: 1 })
    }

    const handleAddToFavourite = () => {
        productData.favourite.length === 0 ? addToFavouriteProduct(productData.productData.data) :
            (productData.favourite.find(item => item.id === productData.productData.data.id)) ? console.log('ff') : addToFavouriteProduct(productData.productData.data)
    }

    const param = useParams();
    const [productId, setproductId] = useState(param.productId);

    useEffect(() => {
        fetchProduct(productId)
    }, [])

    return (
        <div>
            {
                productData.loading ? <Loader /> :
                    productData.productData?.data ?
                        <div className='productDetail-container flex page-width section-container'>
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
                                <p className='product-desc' dangerouslySetInnerHTML={{ __html: productData.productData.data.description }}></p>
                                <p className={productData.productData.data.in_stock ? 'inStock' : 'outOfStock'}>{productData.productData.data.in_stock ? 'currently in stock' : 'out of stock'}</p>
                                <button
                                    className='product-btn'
                                    disabled={!productData.productData.data.in_stock || productData.cart.find(ele => ele.Item.id === productData.productData.data.id)}
                                    onClick={handleAddToCart}
                                >Add to Cart</button>
                                <button
                                    className='product-btn'
                                    onClick={handleAddToFavourite}
                                    disabled={productData.favourite.find(i => i.id === productData.productData.data.id)}
                                >Add to favourite</button>
                            </div>
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
        fetchProduct: (productId) => dispatch(fetchProductData(`https://kamaraapi.weybee.in/api/products/${productId}`)),
        addToCartProduct: (a) => dispatch(addToCartData(a)),
        addToFavouriteProduct: (a) => dispatch(addToFavouriteData(a)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)
