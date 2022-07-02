import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import { login } from './reducers/userReducer';

const reducer = { login: login }

export const store = createStore(
    combineReducers(reducer),
    applyMiddleware(thunk)
)