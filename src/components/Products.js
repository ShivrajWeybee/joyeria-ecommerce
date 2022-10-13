import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom'
import { fetchProductsFromCategoryAction } from '../redux/action'
import { ProductCard } from './ProductCard';
import { Loader } from './Loader';

let keyS;
let valueS;

function Products({ product, fetchProductOrCategory }) {

    const [searchParam, setSearchParam] = useSearchParams()
    console.log(Object.fromEntries([...searchParam]))
    for (let [key, value] of Object.entries(Object.fromEntries([...searchParam]))) {
        keyS = key;
        valueS = value;
    }

    console.log(product.categoryProducts.data)

    useEffect(() => {
        fetchProductOrCategory()
    }, [searchParam])

    return (
        <div className='page-width section-container'>
            {/* {
                searchParam.get(`${keyS}`) ? <h1>{`showing products of ${keyS} ${searchParam.get(keyS)}`}</h1> : <h1>No Listing</h1>
            } */}
            <div className='all-products_container'>
                {
                    product.loading ? <Loader /> :
                        product && product?.categoryProducts?.data?.length ?
                            product.categoryProducts.data.map((product, index) =>
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
                            ) :
                            "There's no product for this category"
                }
            </div>
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
        fetchProductOrCategory: () => dispatch(fetchProductsFromCategoryAction(`https://kamaraapi.weybee.in/api/products?${keyS}=${valueS}`))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
