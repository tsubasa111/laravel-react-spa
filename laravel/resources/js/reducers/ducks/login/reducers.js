import types from './types';

const initialState = {
    authenticated: false,
    loading: false,
    user: {},
    error: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            };
        case types.LOGIN_SUCCESS:
            return {
                loading: false,
                user: {
                    name: action.payload.data.user
                }
            }
        case types.LOGIN_FAIL:
            return {
                loading: false,
                error: action.error.data
            }
    }
}

export default reducer;