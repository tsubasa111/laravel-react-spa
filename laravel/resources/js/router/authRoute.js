import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import useDocumentTitle from '../components/docTitle/index';
import { setIntendedUrl } from '../utils/auth';
import { operations } from '../reducers/ducks/header/index';
import Loading from '../components/loading/circularLoading/index';

const AuthRoute = ({ component: Component, title, authenticated, isLoading, headerTitleChange, ...rest }) => {
    useDocumentTitle(title);

    return (
        <Route
            {...rest}
            render={props => {
                if (authenticated) {
                    headerTitleChange(title);
                    return <Component {...props} />;
                } else {
                    if (isLoading) {
                        return <Loading />
                    }
                    setIntendedUrl(props.location.pathname);
                    return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                }
            }}
        />
    );
}

function mapStateToProps ({ login }) {
    return {
        authenticated: login.authenticated,
        isLoading: login.isLoading
    }
}

function mapDispatchToProps (dispatch) {
    return {
        headerTitleChange (title) {
            dispatch(operations.headerTitleChange(title));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthRoute);