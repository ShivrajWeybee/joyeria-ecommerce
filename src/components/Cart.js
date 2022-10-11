import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { removeFromCart } from '../redux/action';
import Counter from './Counter'

let total;

const Cart = ({ cartData, remove }) => {

    const [isVisible, setIsVisible] = useState(false)

    // useEffect(() => {
    // total = cartData.cart.reduce((a, b) => (a.Item.price * a.quantity) + (b.Item.price * b.quantity), 0)
    // }, [cartData.cart])

    const removeFromCart = (id) => {
        remove(id)
    }

    const handleCloseCart = (e) => {
        console.log("close cart")
    }

    console.log(cartData.cart[0]);

    return (
        <div className="cart-wrapper" onClick={handleCloseCart}>
            <div className="cart-page">
                <div className="cart-header flex">
                    <h1>Cart</h1>
                    <p onClick={handleCloseCart} className="cart-close">X</p>
                </div>
                <div className="all-cart-items">
                    {
                        cartData.cart.length === 0 ? "There's No item in your Cart" :
                            cartData.cart.map((item, index) =>
                                <div
                                    className="cart-item-container flex"
                                    key={index}>
                                    <img src={item.Item.base_image.small_image_url} alt={item.Item.name} />
                                    <div className="cart-item-info flex">
                                        <p className="cart-item-title">{item.Item.name}</p>
                                        <p>{item.Item.formated_price}</p>
                                        <div className="add-remove flex">
                                            <Counter count={item.quantity} id={item.Item.id} />
                                            <p className="remove" onClick={() => removeFromCart(item.Item.id)}><i class="fa-solid fa-trash"></i> Remove</p>
                                        </div>
                                    </div>
                                </div>
                            )
                    }
                </div>
                <div className="grand-total flex">
                    <p>Grand Total</p>
                    <p>
                        $123456
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
        cartData: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        remove: (id) => dispatch(removeFromCart(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart)
