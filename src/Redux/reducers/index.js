import { combineReducers } from 'redux';
import { productsReducer } from './productsReducer';
import { moviesReducer } from './moviesReducer';

export const rootReducer = combineReducers({
    productsReducer,
    moviesReducer,
});