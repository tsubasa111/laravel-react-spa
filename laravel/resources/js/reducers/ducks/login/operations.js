import actions from './actions';
import { loginApi, registerApi } from '../../../api/auth';
import { setAccessToken, setRefreshToken } from '../../../utils/auth';

const login = (email, password) => {
    return async (dispatch) => {
        dispatch(actions.loginRequest());
        const body = {
            email,
            password
        }
        const data = await loginApi(body);
        console.log(data);
        // dispatch(actions.loginSuccess(data));
    }
}

const register = (name, email, password, password_confirmed) => {
    return async () => {
        console.log(name, email, password, password_confirmed);
        // const body = {
        //     name, email, password, password_confirmed
        // }
        // const data = await registerApi(body);
        // console.log(data);
        // login(email, password);
    }
}

export default {
    login,
    register
}