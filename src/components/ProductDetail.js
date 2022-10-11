import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'
import { addToCart, addToCartData, fetchApis, fetchProductData } from '../redux/action';

function ProductDetail({ productData, fetchProduct, addToCartProduct }) {

    const handleAddToCart = () => {
        console.log(productData.cart)
        console.log("add to cart");
        productData.cart.length === 0 ? addToCartProduct({ Item: productData.productData.data, quantity: 1 }) :
            (productData.cart.find(item => item.Item.id === productData.productData.data.id)) ? console.log("hh") : addToCartProduct({ Item: productData.productData.data, quantity: 1 })
        console.log("Item Added to the Cart")
        console.log(productData.cart);
    }

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
                        <div className='productDetail-container flex page-width'>
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
                                <p className={productData.productData.data.in_stock ? 'inStock' : 'outOfStock'}>{productData.productData.data.in_stock ? 'currently in stock' : 'out of stock'}</p>
                                <button
                                    className='product-btn'
                                    disabled={!productData.productData.data.in_stock}
                                    onClick={handleAddToCart}
                                >Add to Cart</button>
                                <button className='product-btn'>Add to favourite</button>
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
        addToCartProduct: (a) => dispatch(addToCartData(a))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)
