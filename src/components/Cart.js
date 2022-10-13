import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { closeCart, removeFromCart } from '../redux/action';
import Counter from './Counter'

const Cart = ({ cartData, remove, isOpenC, closeTheCart }) => {

    const [total, setTotal] = useState(cartData.cart.length === 0 ? 0 : Number(cartData.cart.reduce((a, b) => (Number(a.Item?.price) * Number(a.quantity)) + (Number(b.Item?.price) * Number(b.quantity)))), 0)

    useEffect(() => {
        setTotal(cartData.cart.length === 0 ? 0 : Number(cartData.cart.reduce((a, b) => (Number(a.Item?.price) * Number(a.quantity)) + (Number(b.Item?.price) * Number(b.quantity)), 0)))
    }, [cartData.cart])

    const removeFromCart = (id) => {
        remove(id)
    }

    const handleCloseCart = () => {
        closeTheCart()
    }

    return (
        isOpenC &&
        <div className="cart-wrapper">
            <div className="cart-page">
                <div className="cart-header flex">
                    <p>Cart</p>
                    <p onClick={handleCloseCart} className="cart-close">X</p>
                </div>
                <div className="all-cart-items">
                    {
                        cartData.cart.length === 0 ?
                            <div>
                                <p>"There's No item in your Cart"</p>
                                <p className="go-to-shoping" onClick={handleCloseCart}>Go to shoping</p>
                            </div>
                            : cartData.cart.map((item, index) =>
                                <div
                                    className="cart-item-container flex"
                                    key={index}>
                                    <img src={item.Item.base_image.small_image_url} alt={item.Item.name} />
                                    <div className="cart-item-info flex">
                                        <p className="cart-item-title">{item.Item.name}</p>
                                        <p>{item.Item.formated_price}</p>
                                        <div className="add-remove flex">
                                            <Counter count={item.quantity} id={item.Item.id} />
                                            <p className="remove" onClick={() => removeFromCart(item.Item.id)}><i className="fa-solid fa-trash"></i> Remove</p>
                                        </div>
                                    </div>
                                </div>
                            )
                    }
                </div>
                <div className="grand-total flex">
                    <p>Grand Total</p>
                    <p>
                        {console.log(total)}
                        {/* {
                    console.log(cartData.cart.reduce((a, b) => (a.Item.price * a.quantity) + (b.Item.price * b.quantity), 0))
                } */}
                    </p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cartData: state,
        isOpenC: state.isCartOpen,
        total: state.total,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        remove: (id) => dispatch(removeFromCart(id)),
        closeTheCart: () => dispatch(closeCart())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart)
