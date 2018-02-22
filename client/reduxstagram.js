// let's go!
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import store, { history } from './store';

// Import Components.
import Main from './component/Main';
import PhotoGrid from './component/PhotoGrid';
import Single from './component/Single';
import App from './component/App';

// Import css
import css from './styles/style.styl';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postid" component={Single} />
            </Route>
        </Router>
    </Provider>
)


ReactDOM.render(

    router
    , document.getElementById('root')
);


