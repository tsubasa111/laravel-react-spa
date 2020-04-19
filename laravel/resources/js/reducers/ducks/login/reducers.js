import types from './types';

const initialState = {
    authenticated: false,
    isLoading: false,
    user: {},
    error: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                authenticated: true,
                isLoading: false,
                user: action.payload.data.user
            }
        case types.LOGIN_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.error.data
            }
        default:
            return state;
    }
}

export default reducer;