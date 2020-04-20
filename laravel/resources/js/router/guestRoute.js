import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import useDocumentTitle from '../components/docTitle/index';

const GuestRoute = ({ component: Component, title, authenticated, ...rest }) => {
    useDocumentTitle(title);

    return (
        <Route
            {...rest}
            render={props => (!authenticated
                ? <Component {...props} />
                : <Redirect to="/home" />
            )}
        />
    );
}

function mapStateToProps ({ login }) {
    return {
        authenticated: login.authenticated
    }
}

export default connect(mapStateToProps)(GuestRoute);