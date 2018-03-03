
function commentOperation(state, action) {

    switch (action.type) {
        case 'addComments':
            return [...state, {
                user: action.author,
                text: action.text
            }]
            break;

        case 'removeComments':
            return [...state.slice(0, action.index - 1),
            ...state.slice(action.commandIDindex + 1)
            ]

        default:
            return state;
            break;
    }

}


function comments(state = [], action) {
    console.log('state in reducers', state);

    return {
        ...state, [action.commandID]: commentOperation(state[action.commentID], action)
    }
}

export default comments;