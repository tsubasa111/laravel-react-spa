import actions from './actions';

const headerTitleChange = (title) => {
    return (dispatch) => {
        dispatch(actions.headerTitleChange(title));
    }
}

export default {
    headerTitleChange
}