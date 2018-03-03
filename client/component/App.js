import { connect } from 'react-redux';

import * as actionsCreator from '../actions/ActionCreator';

import { bindActionCreators } from 'redux';

// import commnent.
import Main from './Main';

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        comments: state.comments,
        numbers: state.numbers
    }
}

const mapDispatchToProps = (dispatch) => {

    return bindActionCreators(actionsCreator, dispatch);

}

const App = connect(mapStateToProps, mapDispatchToProps)(Main); 


export default App;


