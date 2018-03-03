
export const AddLikes = (index) => {

    return {
        type: 'addLikes',
        index
    }

};

export const Unlike = (index) => {
    return {
        type: 'unlike',
        index
    }

}

export const filterPost = (searchString) => {

    return {
        type: 'filter',
        searchString

    }
}

export const addComments = (author, text, commandID) => {
    return {
        type: 'addComments',
        author,
        text,
        commandID
    }

};

export const removeComments = (index, commentID) => {
    return {
        type: 'removeComments',
        index,
        commentID
    }
};

export const addNumbers = (number) => {

    return {
        type: 'addNumber',
        number
    }
};

export const removeNumbers = (number) => {

    return {
        type: 'removeNumber',
        number
    }
};


export const editNumber = (number, index) => {
    return {
        type: 'editNumber',
        number,
        index
    }
}