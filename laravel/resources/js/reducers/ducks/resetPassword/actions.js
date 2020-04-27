import types from './types';

const resetPasswordRequest = () => ({
    type: types.RESET_PASSWORD_REQUEST
});

const resetPasswordSuccess = () => ({
    type: types.RESET_PASSWORD_SUCCESS
});

const resetPasswordFail = data => ({
    type: types.RESET_PASSWORD_FAIL,
    error: {
        data
    }
});

export default {
    resetPasswordRequest,
    resetPasswordSuccess,
    resetPasswordFail
}