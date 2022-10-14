import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { closeCart, removeFromCart, setGrandTotal } from '../redux/action';
import Counter from './Counter'

const Cart = ({ cartData, remove, isOpenC, total, closeTheCart, settingTheTotal }) => {

    // const [totalC, setTotalC] = useState(cartData.cart.length === 0 ? 0 : (cartData.cart.reduce((acc, i) => acc + i.Item?.price * i.quantity, 0)))

    useEffect(() => {
        // setTotalC(cartData.cart.length === 0 ? 0 : (cartData.cart.reduce((acc, i) => acc + i.Item?.price * i.quantity, 0)))
        settingTheTotal()
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
                        <i className="fa-solid fa-indian-rupee-sign"></i> {Math.round(total * 100 / 100).toFixed(2)}
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
        closeTheCart: () => dispatch(closeCart()),
        settingTheTotal: () => dispatch(setGrandTotal()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart)
