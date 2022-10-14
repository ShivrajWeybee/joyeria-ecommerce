import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { closeCart, openCart } from '../redux/action';
import Cart from './Cart'

function Header({ isOpen, openTheCart, closeTheCart }) {

    const handleOpenCart = () => {
        openTheCart()
    }

    return (
        <div className='header page-width'>
            <div className='header-inner flex'>
                <div className='header-item'>
                    <a className="desktop-icon"><i className="fa-solid fa-magnifying-glass"></i></a>
                    <a className="mobile-icon"><i class="fa-solid fa-bars"></i></a>
                </div>
                <Link to="/"><p className='logo'>Joyería</p></Link>
                <div className='flex navbar_wishlist-and-cart'>
                    <a className="mobile-icon"><i className="fa-solid fa-magnifying-glass"></i></a>
                    <Link to="favourite"><i className="fa-regular fa-heart"></i></Link>
                    <a onClick={handleOpenCart}><i className="fa-solid fa-cart-shopping"></i></a>
                </div>
            </div>
            {isOpen && <Cart />}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isOpen: state.isCartOpen,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openTheCart: () => dispatch(openCart()),
        closeTheCart: () => dispatch(closeCart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
