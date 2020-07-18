import React from 'react';
import { connect } from 'react-redux';
import FeaturedProducts from '../feaured-products/featured-products.component';
import './shop-category.styles.scss';

const ShopCategory = ({ match, SHOP_DATA }) => {
    const filteredData = SHOP_DATA.filter(data => data.title === match.params.title);
    return (
        <div className='shop-category'>
            <h2 className='shop-category-heading'>{match.params.title}</h2>
            <div className='shop-category-container'>
           {
               filteredData[0].items.map(({ id, name, imageUrl,price}) => <FeaturedProducts key={id} name={name} imageUrl={imageUrl} price={price} />)
           }
           </div>
        </div>
    );
};
const mapStateToProps = state => ({
    SHOP_DATA : state.shop.SHOP_DATA
})

export default connect(mapStateToProps)(ShopCategory);