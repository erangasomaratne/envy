import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './shop-catalogue.styles.scss';

const ShopCatalogue = ({ imageUrl, title, linkUrl, match }) => {
    return (
        <div className='shop-catalogue'>
            <div className='shop-catalogue-image'>
                <img src={imageUrl} alt={title} className='shop-catalogue-image-img' />
                <button className='shop-catalogue-btn'><Link to={`${match.url}${linkUrl}`}>{title}</Link></button>
            </div>
            
        </div>
    );  
};

export default withRouter(ShopCatalogue);