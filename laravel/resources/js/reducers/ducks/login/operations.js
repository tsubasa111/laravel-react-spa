import actions from './actions';
import { loginApi, registerApi } from '../../../api/auth';
import { setAccessToken, setRefreshToken } from '../../../utils/auth';
import { push } from 'connected-react-router';

const login = (email, password) => {
    return async (dispatch) => {
        dispatch(actions.loginRequest());
        const body = {
            email,
            password
        }
        await loginApi(body)
            .then(response => {
                setAccessToken(response.data.access_token);
                setRefreshToken(response.data.refresh_token);
                dispatch(actions.loginSuccess(response.data));
                dispatch(push('/home'));
            })
            .catch(response => {
                dispatch(actions.loginFail(response.data.errors));
            });
    }
}

const register = (name, email, password, password_confirmation) => {
    return async (dispatch) => {
        dispatch(actions.loginRequest());
        const body = {
            name, email, password, password_confirmation
        }
        await registerApi(body)
            .then(response => {
                setAccessToken(response.data.access_token);
                setRefreshToken(response.data.refresh_token);
                dispatch(actions.loginSuccess(response.data));
                dispatch(push('/home'));
            })
            .catch(response => {
                dispatch(actions.loginFail(response.data.errors));
            });
    }
}

export default {
    login,
    register
}