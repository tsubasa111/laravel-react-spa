import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import useDocumentTitle from '../components/docTitle/index';
import { getIntendedUrl } from '../utils/auth';
import { operations } from '../reducers/ducks/header/index';

const GuestRoute = ({ component: Component, title, authenticated, headerTitleChange, ...rest }) => {
    useDocumentTitle(title);

    return (
        <Route
            {...rest}
            render={props => {
                if (!authenticated) {
                    headerTitleChange(title);
                    return <Component {...props} />
                } else {
                    return <Redirect to={{ pathname: getIntendedUrl(), state: { from: props.location } }} />
                }
            }}
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
        headerTitleChange (title) {
            dispatch(operations.headerTitleChange(title));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuestRoute);