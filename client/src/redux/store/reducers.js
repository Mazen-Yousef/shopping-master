import {combineReducers} from 'redux';
import { cartReducer } from './cartReducer';
import { orderRducer } from './orderRducer';
import { productsReducer } from './productsReducer';

export default combineReducers ({
    products: productsReducer,
    cart: cartReducer,
    order: orderRducer
})