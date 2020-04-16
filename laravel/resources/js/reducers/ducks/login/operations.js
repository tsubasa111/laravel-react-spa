import actions from './actions';
import { } from '../../../api/auth';
import { setAccessToken, setRefreshToken } from '../../../utils/auth';

export const login = (name, mail) => {
    return async (dispatch) => {

        dispatch(actions.login());
    }
}