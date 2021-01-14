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
                // return current state + changed the basket 
                ...state,
                basket: [...state.basket, action.item],
            };
            break;
        
        case "REMOVE_FROM_BASKET":
            let newBasket = [...state.basket];
           
            // find index of item that has same id as action.id
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
    
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not in basket!`
                );
            }
            return {
                ...state,
                basket: newBasket
            };
        default:
            return state;
    }
}

export default reducer;