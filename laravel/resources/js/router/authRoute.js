import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import useDocumentTitle from '../components/docTitle/index';

const AuthRoute = ({ component: Component, title, authenticated, ...rest }) => {
    useDocumentTitle(title);

    return (
        <Route
            {...rest}
            render={props => (authenticated
                ? <Component {...props} />
                : <Redirect to="/login" />
            )}
        />
    );
}

function mapStateToProps ({ login }) {
    return {
        authenticated: login.authenticated
    }
}

function mapDispatchToProps () {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthRoute);