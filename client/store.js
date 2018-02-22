import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Import Reducers;
import rootReducer from './reducers/Index';


// Import Default Vaules.
import posts from './data/posts';
import comments from './data/comments';


const defaultState = {
    posts,
    comments
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
