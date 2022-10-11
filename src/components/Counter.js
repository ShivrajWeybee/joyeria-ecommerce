import React, { useState } from 'react'
import { connect } from 'react-redux'
import { decrementItem, decrementQuantity, incrementItem, incrementQuantity } from '../redux/action'

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
            <p onClick={decrement} className="btn"><i class="fa-solid fa-minus"></i></p>
            <p className="quantity-number">{qCount}</p>
            <p onClick={increment} className="btn"><i class="fa-solid fa-plus"></i></p>
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
