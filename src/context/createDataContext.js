import React, { useReducer } from "react";

//Refactoring and Reusing
export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ childern }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    //bound to copy of dispatch
    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <BlogContext.Provider value={{ state, ...boundActions }}>
        {children}
      </BlogContext.Provider>
    );
  };
  return { Context, Provider };
};
