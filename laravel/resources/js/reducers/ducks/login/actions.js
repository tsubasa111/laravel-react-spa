import types from './types';

const loginRequest = () => ({
    type: types.LOGIN_REQUEST
});

const loginSuccess = (data) => ({
    type: types.LOGIN_SUCCESS,
    payload: {
        data
    }
});

const loginFail = (data) => ({
    type: types.LOGIN_FAIL,
    error: {
        data
    }
});

const logout = () => ({
    type: types.LOGOUT,
})

export default {
    loginRequest,
    loginSuccess,
    loginFail,
    logout
}