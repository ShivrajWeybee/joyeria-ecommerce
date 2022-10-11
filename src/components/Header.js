import React from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart'

export const Header = () => {
    return (
        <div className='header page-width'>
            <div className='header-inner flex'>
                <div className='header-item'><i className="fa-solid fa-magnifying-glass"></i></div>
                <div><p className='logo'>Joyería</p></div>
                <div className='flex navbar_wishlist-and-cart'>
                    <Link><i className="fa-regular fa-heart"></i></Link>
                    <i className="fa-solid fa-cart-shopping" onClick={<Cart />}></i>
                </div>
            </div>
        </div>
    )
}
