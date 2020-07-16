import React, { useReducer } from "react";

//Refactoring and Reusing
export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ childern }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
      <BlogContext.Provider value={{ state }}>{children}</BlogContext.Provider>
    );
  };
  return { Context, Provider };
};
