import types from './types';

const initialState = {
    isLoading: false,
    isReset: false,
    errors: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.RESET_PASSWORD_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case types.RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isReset: true,
                errors: {}
            };
        case types.RESET_PASSWORD_FAIL:
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