import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Import Reducers;
import rootReducer from './reducers/Index';


// Import Default Vaules.
import posts from './data/posts';
import comments from './data/comments';
import numbers from './data/numbers';


const defaultState = {
    posts,
    comments,
    numbers
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
