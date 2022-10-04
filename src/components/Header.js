import React from 'react'

export const Header = () => {
    return (
        <div className='header'>
            <div className='header-inner flex'>
                <div className='header-item'><i className="fa-solid fa-magnifying-glass"></i></div>
                <div><p className='logo'>Joyería</p></div>
                <div className='flex navbar_wishlist-and-cart'>
                    <i className="fa-regular fa-heart"></i>
                    <i className="fa-solid fa-cart-shopping"></i>
                </div>
            </div>
        </div>
    )
}
