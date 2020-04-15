import React, { Component } from 'react';
import styled from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch, Redirect } from 'react-router';
import { Provider } from 'react-redux';
import store from '../store/index';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import history from './history';
import ScrollTop from './scrollTop';
import Login from '../pages/login/index';
import Register from '../pages/register/index';
import NotFound from '../pages/notFound/index';
import Header from '../components/header/index';

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
                                    <Route exact path="/" render={() => <Redirect to="/login" />} />
                                    <Route exact path="/login" component={Login} />
                                    <Route exact path="/register" component={Register} />
                                    <Route path="*" component={NotFound} />
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