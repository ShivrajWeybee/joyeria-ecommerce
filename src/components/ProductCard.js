import React from 'react'

export const ProductCard = ({ imgUrl, price, pName, isFavourite }) => {
    return (
        <div>
            <div className='product-card_img-container'>
                <img src={imgUrl} alt='product' />
            </div>
            <div className='product-card_info'>
                <p className="pName">{pName}</p>
                <p>{price}</p>
            </div>
        </div>
    )
}
