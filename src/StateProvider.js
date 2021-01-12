//setup dataLayer/react context api to avoid prop drilling
// need this to track the basket

import { createContext, useContext, useReducer } from "react";

// empty dataLayer
export const StateContext = createContext();

//build a provider to wrap the entire app inside and give access to this dataLayer
// initialState = how dataLayer looks in the beginning
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
); 
