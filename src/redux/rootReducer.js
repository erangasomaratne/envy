import { combineReducers } from 'redux';
import shopReducer from './shop-reducer/shop.reducer';
import cartReducer from './cart-reducer/cart-reducer';

const rootReducer = combineReducers({
    shop:shopReducer,
    cart:cartReducer
});

export default rootReducer;