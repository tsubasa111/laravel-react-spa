import types from './types';

const passwordResetEmailRequest = () => ({
    type: types.PASSWORD_RESET_EMAIL_REQUEST
});

const passwordResetEmailSuccess = () => ({
    type: types.PASSWORD_RESET_EMAIL_SUCCESS
});

const passwordResetEmailFail = data => ({
    type: types.PASSWORD_RESET_EMAIL_FAIL,
    error: {
        data
    }
});

export default {
    passwordResetEmailRequest,
    passwordResetEmailSuccess,
    passwordResetEmailFail
}