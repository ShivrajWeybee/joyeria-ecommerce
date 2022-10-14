import React, { useState } from 'react'
import { connect } from 'react-redux'
import { decrementQuantity, incrementQuantity } from '../redux/action'

const Counter = ({ cartItemCount, count, id, incrementCartItem, decrementCartItem }) => {

    const [qCount, setQCount] = useState(count)

    const increment = () => {
        setQCount(prevCount => prevCount + 1)
        incrementCartItem(id, qCount)
    }

    const decrement = () => {
        setQCount(prevCount => prevCount > 0 ? prevCount - 1 : prevCount)
        decrementCartItem(id, qCount)
    }

    return (
        <div className="counter flex">
            <button onClick={decrement} className="btn" disabled={qCount === 1}><i className="fa-solid fa-minus"></i></button>
            <button className="quantity-number">{qCount}</button>
            <button onClick={increment} className="btn"><i className="fa-solid fa-plus"></i></button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        cartItemCount: state.cart,
        count: ownProps.count,
        id: ownProps.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementCartItem: (id, qCount) => dispatch(incrementQuantity(id, qCount)),
        decrementCartItem: (id, qCount) => dispatch(decrementQuantity(id, qCount))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
