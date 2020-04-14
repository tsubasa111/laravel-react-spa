import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import history from '../router/history';

export default combineReducers({
    //- router
    router: connectRouter(history),
});