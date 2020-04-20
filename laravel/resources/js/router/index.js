import React, { Component } from 'react';
import styled from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Redirect } from 'react-router';
import { Provider } from 'react-redux';
import store from '../store/index';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../utils/theme';
import history from './history';
import ScrollTop from '../utils/scrollTop';
import Login from '../pages/login/index';
import Register from '../pages/register/index';
import Home from '../pages/home/index';
import NotFound from '../pages/notFound/index';
import Header from '../components/header/index';
import GuestRoute from './guestRoute';
import AuthRoute from './authRoute';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <Provider store={store}>
                <MuiThemeProvider theme={theme}>
                    <ConnectedRouter history={history}>
                        <ScrollTop>
                            <Header />
                            <Wrapper>
                                <Switch>
                                    <GuestRoute exact path="/" render={() => <Redirect to="/login" />} />
                                    <GuestRoute exact path="/login" component={Login} title="login" />
                                    <GuestRoute exact path="/register" component={Register} title="register" />
                                    <AuthRoute exact path="/home" component={Home} title="home" />
                                    <AuthRoute path="*" component={NotFound} title="NotFound" />
                                </Switch>
                            </Wrapper>
                        </ScrollTop>
                    </ConnectedRouter>
                </MuiThemeProvider>
            </Provider>
        );
    }
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 48px;
`;

export default App;