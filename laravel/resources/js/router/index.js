import React from 'react';
import styled from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch, Redirect } from 'react-router';
import { Provider } from 'react-redux';
import store from '../store/index';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../utils/theme';
import history from './history';
import ScrollTop from '../utils/scrollTop';
import Login from '../pages/login/index';
import Register from '../pages/register/index';
import PasswordForget from '../pages/password/forget/index';
import PasswordReset from '../pages/password/reset/index';
import Home from '../pages/home/index';
import Company from '../pages/company/index';
import NotFound from '../pages/notFound/index';
import Header from '../components/header/index';
import GuestRoute from './guestRoute';
import AuthRoute from './authRoute';
import { operations } from '../reducers/ducks/login/index';

const App = () => {
    store.dispatch(operations.reLogin());

    return (
        <Provider store={store}>
            <MuiThemeProvider theme={theme}>
                <ConnectedRouter history={history}>
                    <ScrollTop>
                        <Header />
                        <Wrapper>
                            <Switch>
                                <Route exact path="/" render={() => <Redirect to="/login" />} />
                                <GuestRoute exact path="/login" component={Login} title="Login" />
                                <GuestRoute exact path="/register" component={Register} title="Register" />
                                <GuestRoute exact path="/password/forget" component={PasswordForget} title="Password Forget" />
                                <GuestRoute exact path="/password/reset" component={PasswordReset} title="Password Reset" />
                                <AuthRoute exact path="/home" component={Home} title="Home" />
                                <AuthRoute exact path="/company" component={Company} title="Company" />
                                <Route path="*" component={NotFound} title="Not Found" />
                            </Switch>
                        </Wrapper>
                    </ScrollTop>
                </ConnectedRouter>
            </MuiThemeProvider>
        </Provider>
    );

}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 48px;
`;

export default App;