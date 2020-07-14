import React, { createContext, useReducer } from 'react';
import { CartReducer } from './CartReducer';

const initialState = {
    cart: [],
}

export const CartContext = createContext(initialState);

const CartContextProvider = ({children}) => {

    const [ state, dispatch ] = useReducer(CartReducer, initialState);

    function addToCart(product) {
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                ...product,
                items: 1,
            },
        });
    }

    return(
        <CartContext.Provider 
            value={{
                cart: state.cart,
                addToCart,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;