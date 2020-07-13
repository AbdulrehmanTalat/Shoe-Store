import { createContext } from "react";

export const initialState = {
  products: [
  ],
};

const GlobalContext = createContext(initialState);

export default GlobalContext;