import actions from './actions';
import { resetPasswordApi } from '../../../api/auth';
import { push } from 'connected-react-router';

const resetPassword = (email, password, password_confirmation, token) => {
    return async (dispatch) => {
        dispatch(actions.resetPasswordRequest());
        const body = {
            email,
            password,
            password_confirmation,
            token
        }
        await resetPasswordApi(body)
            .then(response => {
                dispatch(actions.resetPasswordSuccess());
                dispatch(push('/login'));
            })
            .catch(response => {
                const errors = response.data.errors;
                dispatch(actions.resetPasswordFail(errors));
            });
    }
}

export default {
    resetPassword
}