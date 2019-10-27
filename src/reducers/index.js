const initialState = {
    search = ''
};

export default (state = initialState, action) => {
    switch(action.type){
        case 'SEARCH_MOVIE':
            console.log(action.payload)
            return state
        default:
            return state
    }
}