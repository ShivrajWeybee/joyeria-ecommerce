import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom'
import { addToFavouriteData, fetchProductsFromCategoryAction } from '../redux/action'
import { ProductCard } from './ProductCard';
import { Loader } from './Loader';

let keyS;
let valueS;

function Products({ product, fetchProductOrCategory, addToFavouriteProduct }) {

    const [searchParam, setSearchParam] = useSearchParams()
    // console.log(Object.fromEntries([...searchParam]))
    for (let [key, value] of Object.entries(Object.fromEntries([...searchParam]))) {
        keyS = key;
        valueS = value;
    }

    const handleAddToFavourite = (id) => {
        console.log("handle favourite worked...")
        product.favourite.length === 0 ? addToFavouriteProduct(product.categoryProducts.data.find(item => item.id === id)) :
            (product.favourite.find(item => item.id === id)) ? console.log('ff') : addToFavouriteProduct(product.categoryProducts.data.find(item => item.id === id))
    }

    useEffect(() => {
        fetchProductOrCategory()
    }, [searchParam])

    return (
        <div className='page-width section-container'>
            {/* {
                searchParam.get(`${keyS}`) ? <h1>{`showing products of ${keyS} ${searchParam.get(keyS)}`}</h1> : <h1>No Listing</h1>
            } */}
            {
                product.loading ? <Loader /> :
                    <div className='all-products_container'>
                        {
                            product && product?.categoryProducts?.data?.length ?
                                product.categoryProducts.data.map((product, index) =>
                                    <Link className="product-card_container">
                                        <div className="heart-delete"><i className="fa-solid fa-heart" onClick={() => handleAddToFavourite(product.id)}></i></div>
                                        <Link
                                            key={index}
                                            to={`${product.id}`}>
                                            <ProductCard
                                                isFavourite={false}
                                                imgUrl={product.base_image.medium_image_url}
                                                price={product.formated_price}
                                                pName={product.name}
                                            />
                                        </Link>
                                    </Link>
                                ) :
                                "There's no product for this category"
                        }
                    </div>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        product: state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProductOrCategory: () => dispatch(fetchProductsFromCategoryAction(`https://kamaraapi.weybee.in/api/products?${keyS}=${valueS}`)),
        addToFavouriteProduct: (a) => dispatch(addToFavouriteData(a)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
