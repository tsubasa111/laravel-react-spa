import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import useDocumentTitle from '../components/docTitle/index';

const AuthRoute = ({ component: Component, title, authenticated, isLoading, reLogin, ...rest }) => {
    useDocumentTitle(title);

    return (
        <Route
            {...rest}
            render={props => {
                if (authenticated) {
                    return <Component {...props} />;
                } else {
                    return <Redirect to="/login" />
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

export default connect(mapStateToProps)(AuthRoute);