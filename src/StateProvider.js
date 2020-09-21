//setup data layer
import React, { createContext, useReducer, useContext } from "react";

//this is data layer
export const StateContext = createContext();

//build a Provider
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

//This is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);
