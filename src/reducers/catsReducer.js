const catsReducer = (state = { cats: [], loading: false }, action) => {
    switch (action.type) {
        case 'LOADING_CATS': 
        debugger
            return {
                ...state,
                cats: [...state.cats],
                loading: true
            }
        case 'ADD_CATS': 
        debugger
            return {
                ...state,
                cats: action.cats,
                loading: false
            }
        default:
            return state;
    }
}

export default catsReducer;
