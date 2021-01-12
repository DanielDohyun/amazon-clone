export const initialState = {
    basket: [],

};

// refer to dataLayer as a state
// manipulate dataLayer with action
function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            //Logic for adding item to basket
            break;
        case 'REMOVE_FROM_BASKET':
            //Logic for removing item to basket
            break;
        default:
            return state;
    }
}

export default reducer;