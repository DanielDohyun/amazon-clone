export const initialState = {
    basket: [],
    user: null,

};

// refer to dataLayer as a state
// manipulate dataLayer with action
const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            //Logic for adding item to basket
            //return new dataLayer
            return {
                // return current state + change the basket 
                ...state,
                basket: [...state.basket, action.item],
            };
            break;
        case 'REMOVE_FROM_BASKET':
            //Logic for removing item to basket
            break;
        default:
            return state;
    }
}

export default reducer;