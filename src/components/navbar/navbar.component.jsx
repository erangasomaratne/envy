import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import toggleShoppingCart from '../../redux/cart-reducer/cart-action';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './navbar.styles.scss';

const NavBar = ({ toggleCart, toggleShoppingCart }) => {    
    return (
        <div className='navigation'>            
            <ul className='navigation-items'>
                <span className='navigation-items-title'><Link to='/'>envy</Link></span>
                <div className='navigation-items-menu'>
                    <Link to='/'>home</Link>
                    <Link to='/shop'>shop</Link>
                    <Link to='/login'>login</Link> 
                    <span onClick={() => toggleShoppingCart(!toggleCart) }>cart</span>                    
                    <span className='navigation-items-menu-item-count'>0</span>
                </div>                                                                   
            </ul>
            {
                toggleCart ? <CartDropdown /> : null
            } 
        </div>
    );
};

const mapStateToProps = state => ({
    toggleCart : state.cart.toggleCart
});

const mapDispatchToProps = dispatch => {
    return {
        toggleShoppingCart : cart => dispatch(toggleShoppingCart(cart))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);