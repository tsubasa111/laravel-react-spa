import types from './types';

const initialState = {
    title: 'Login'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.HEADER_TITLECHANGE:
            return {
                ...state,
                title: action.payload.title
            };
        default:
            return state;
    }
}

export default reducer;