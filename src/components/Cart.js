import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Counter from './Counter'

const Cart = ({ cartData }) => {
    const [total, setTotal] = useState(0)

    useEffect(() => {
        cartData.cart.forEach((i, index) => setTotal(prevTotal => prevTotal + (Number(i.Item.price) * Number(i.Quantity))))
    }, [cartData.cart])

    return (
        <div>
            <h1>Cart</h1>
            {
                cartData.cart.length === 0 ? "There's No item in your Cart" :
                    cartData.cart.map((item, index) =>
                        <div
                            className="cart-item-container"
                            key={index}>
                            <img src={item.Item.base_image.small_image_url} alt={item.Item.name} />
                            <div>
                                <p>{item.Item.id}</p>
                                <p>{item.Item.name}</p>
                                <a>remove from cart</a>
                                <Counter count={item.Quantity} id={item.Item.id} />
                            </div>
                        </div>
                    )
            }
            <p>Grand Total</p>
            <p>{total}</p>
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
        fetchCart: () => dispatch()
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
