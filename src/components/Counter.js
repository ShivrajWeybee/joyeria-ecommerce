import React, { useState } from 'react'
import { connect } from 'react-redux'

const Counter = ({ cartItemCount, count, id }) => {

    const [qCount, setQCount] = useState(count)

    const increment = () => {
        console.log("Increment")
        console.log(`count : ${count}`)
        console.log(`id : ${id}`)
        setQCount(prevCount => prevCount + 1)
        cartItemCount.forEach((item, index) => item.Item.id === id ? item.Quantity = qCount : item.Quantity)
    }

    const decrement = () => {
        console.log("Decrement")
        setQCount(prevCount => prevCount > 0 ? prevCount - 1 : prevCount)
        cartItemCount.forEach((item, index) => item.Item.id === id ? item.Quantity = qCount : item.Quantity)
    }

    return (
        <div>
            <button onClick={decrement}>-</button>
            <p>{qCount}</p>
            <button onClick={increment}>+</button>
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
        fetchCart: () => dispatch()
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
