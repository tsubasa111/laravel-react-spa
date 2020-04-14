import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch, Redirect } from 'react-router';
import { Provider } from 'react-redux';
import store from '../store/index';
import history from './history';
import Login from '../pages/login';
import NotFound from '../pages/notFound';

class App extends Component {
    render () {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route exact path="/" render={() => <Redirect to="/login" />} />
                        <Route exact path="/login" component={Login} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default App;