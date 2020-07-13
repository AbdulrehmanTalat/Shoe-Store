import React, { useReducer } from 'react'
import GlobalContext, { initialState } from './GlobalContext';
import DataReducer from './DataReducer';
export const GlobalDataProvider = ({children}) => {
  const [state, dispatch] = useReducer(DataReducer, initialState)
  return (
     <GlobalContext.Provider
     value ={{
       products: state.products
     }}
     >
       {children}
     </GlobalContext.Provider>
  )
}
