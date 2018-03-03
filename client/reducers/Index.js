import { combineReducers } from 'redux'


// import new staff.
import { routerReducer } from 'react-router-redux';

// Import reducers
import posts from './Posts';
import comments from './Comments';
import numbers from './Numbers';

const rootReducer = combineReducers({ posts, comments, numbers, routing: routerReducer });

export default rootReducer;
