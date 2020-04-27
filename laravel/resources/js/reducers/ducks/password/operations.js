import actions from './actions';
import { passwordResetEmailApi } from '../../../api/auth';

const getPasswordResetEmail = (email) => {
    return async (dispatch) => {
        dispatch(actions.passwordResetEmailRequest());
        const body = {
            email
        }
        await passwordResetEmailApi(body)
            .then(response => {
                dispatch(actions.passwordResetEmailSuccess());
            })
            .catch(response => {
                const errors = response.data.errors;
                dispatch(actions.passwordResetEmailFail(errors));
            });
    }
}

export default {
    getPasswordResetEmail
}