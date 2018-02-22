function posts(state = [], action) {

  const index = action.index;

  switch (action.type) {
    case 'addLikes':
      return [
        ...state.slice(0, index),
        { ...state[index], likes: state[index].likes + 1, },
        ...state.slice(index + 1)
      ];
      break;

    case 'unlike':

      return [...state.slice(0, index),
      { ...state[index], likes: state[index].likes - 1 },
      ...state.slice(index + 1)
      ];

    case 'filter':
   
     return [...state, matchingString:action.searchString];

    default:
      return state;
      break;
  }

}

export default posts;