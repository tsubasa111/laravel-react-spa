import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import history from '../router/history';
import login from './ducks/login/index';
import header from './ducks/header/index';
import password from './ducks/password/index';
import resetPassword from './ducks/resetPassword/index';

export default combineReducers({
    //- router
    router: connectRouter(history),

    //- 作成したreducer
    login,
    header,
    password,
    resetPassword
});