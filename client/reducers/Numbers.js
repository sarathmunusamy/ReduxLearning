
const numbers = (state = {}, action) => {

    switch (action.type) {
        case 'addNumber':

            return { ...state.number, number: [...state.number, action.number] }
            break;

        case 'removeNumber':

            return {
                ...state.number, number: [...state.number.slice(0, action.number), ...state.number.slice(action.number + 1, state.number.length)]
            }
            return state;
            break;

        case 'editNumber':
            var index = action.index;
            return {
                ...state.number, number: [...state.number.slice(0, index), action.number, ...state.number.slice(index + 1,state.number.length)]
            }
            break;
        default:
            return state;
            break;
    }

}

export default numbers;