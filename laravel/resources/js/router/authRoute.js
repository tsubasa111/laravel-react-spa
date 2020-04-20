import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { operations } from '../reducers/ducks/login/index';
import useDocumentTitle from '../components/docTitle/index';

const AuthRoute = ({ component: Component, title, authenticated, reLogin, ...rest }) => {
    // if (!authenticated) {
    //     reLogin(rest.location.state.from.pathname);
    // }
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

function mapDispatchToProps (dispatch) {
    return {
        reLogin () {
            dispatch(operations.reLogin());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthRoute);