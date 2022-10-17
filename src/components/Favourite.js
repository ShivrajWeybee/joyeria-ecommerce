import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromFavouriteData } from '../redux/action'
import { ProductCard } from './ProductCard'

function Favourite({ loading, favouriteData, removeFavourite }) {

    return (
        <div className="page-width section-container">
            <div className="all-products_container">
                {
                    favouriteData.length === 0 ?
                        <div>
                            <p>There's no item in your Favourite list..</p>
                            <p><Link to='/products' className="go-to-shoping">Go to shoping</Link></p>
                        </div>
                        : favouriteData.map((item, index) =>
                            <Link className="product-card_container">
                                <div className="heart-delete"><i className="fa-solid fa-trash" onClick={() => removeFavourite(item.id)}></i></div>
                                <Link
                                    key={index}
                                    to={`/products/${item.id}`}>
                                    <ProductCard
                                        imgUrl={item.base_image?.medium_image_url}
                                        price={item.formated_price}
                                        pName={item.name}
                                    />
                                </Link>
                            </Link>
                        )
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        favouriteData: state.favourite,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFavourite: (a) => dispatch(removeFromFavouriteData(a))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourite)
