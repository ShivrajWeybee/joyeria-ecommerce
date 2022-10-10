import React from 'react'

export const ProductCard = ({ imgUrl, price }) => {
    return (
        <div className='product-card_container'>
            <div className='product-card_img-container'>
                <img src={imgUrl} alt='product' />
            </div>
            <div className='product-card_info'>
                <p>{price}</p>
            </div>
        </div>
    )
}
