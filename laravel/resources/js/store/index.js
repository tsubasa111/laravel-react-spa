import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers/index';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import history from '../router/history';
import logger from 'redux-logger';

const middlewares = [logger, thunk, routerMiddleware(history)];

export default createStore(reducers, applyMiddleware(...middlewares));