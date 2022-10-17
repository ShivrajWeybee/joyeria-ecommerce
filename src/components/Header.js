import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { closeCart, closeMobileNav, openCart, openMobileNav } from '../redux/action';
import Cart from './Cart'

function Header({ isOpen, openTheCart, closeTheCart, openNav, openTheNav, closeTheNav }) {

    const handleOpenCart = () => {
        openTheCart()
    }

    const handleMobileNav = () => {
        openTheNav()
    }

    return (
        <div className='header page-width'>
            <div className='header-inner flex'>
                <div className='header-item flex'>
                    <div
                        className={`mobile-icon ${openNav ? "mobile-active" : ""}`}
                        onClick={handleMobileNav}
                    >
                        <div className="hamburger"></div>
                    </div>
                    {/* <i className="fa-solid fa-xmark"></i> */}
                    <a><i className="fa-solid fa-magnifying-glass"></i></a>
                </div>
                <Link to="/"><p className='logo'>Joyería</p></Link>
                <div className='flex navbar_wishlist-and-cart'>
                    {/* <a className="mobile-icon"><i className="fa-solid fa-magnifying-glass"></i></a> */}
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
        openNav: state.isNavOpen,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openTheCart: () => dispatch(openCart()),
        closeTheCart: () => dispatch(closeCart()),
        openTheNav: () => dispatch(openMobileNav()),
        closeTheNav: () => dispatch(closeMobileNav()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
