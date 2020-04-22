import types from './types';

const headerTitleChange = title => ({
    type: types.HEADER_TITLECHANGE,
    payload: {
        title
    }
});

export default {
    headerTitleChange
}