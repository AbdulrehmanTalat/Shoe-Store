import React, { useReducer } from "react";
import GlobalContext, { initialState } from "./GlobalContext";
import reducer, {
  RECIEVE_PRODUCTS
} from "./DataReducer";

const GlobalDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function recieveProducts(products) {
    dispatch({
      type: RECIEVE_PRODUCTS,
      payload: products,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        products: state.products,
        recieveProducts,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalDataProvider;
