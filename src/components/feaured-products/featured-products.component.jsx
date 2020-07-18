import React from 'react';
import './featured-products.styles.scss';

const FeaturedProducts = ({ name, imageUrl, price }) => {
    return (
        <div className='featured-product'>            
            <div className='featured-product-image'>
                <img src={imageUrl} alt={name} className='featured-product-image-img' />
            </div>
            <div className='featured-product-details'>
                <span>{name}</span>
                <span>$ {price}</span>
                <button className='featured-product-details-btn'>add to cart</button>
            </div>
        </div>
    );
};

export default FeaturedProducts;