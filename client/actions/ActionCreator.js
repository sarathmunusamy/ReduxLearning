
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