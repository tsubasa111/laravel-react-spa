import types from './types';

const initialState = {
    isLoading: false,
    send: false,
    errors: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.PASSWORD_RESET_EMAIL_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case types.PASSWORD_RESET_EMAIL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                send: true,
                errors: {}
            };
        case types.PASSWORD_RESET_EMAIL_FAIL:
            return {
                ...state,
                isLoading: false,
                errors: action.error.data
            };
        default:
            return state;
    }
}

export default reducer;