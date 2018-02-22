import { combineReducers } from 'redux'


// import new staff.
import { routerReducer } from 'react-router-redux';

// Import reducers
import posts from './Posts';
import comments from './Comments';

const rootReducer = combineReducers({ posts, comments, routing: routerReducer });

export default rootReducer;
