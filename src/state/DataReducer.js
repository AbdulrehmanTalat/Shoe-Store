export const RECIEVE_PRODUCTS = "RECIEVE_PRODUCTS";
export const ADD_TO_CART = "ADD_TO_CART";
export const CANCEL_CART = "CANCEL_CART";

export default (state, action) => {
  switch (action.type) {
    case RECIEVE_PRODUCTS:
       console.log("Recieved products: ", action.payload);
      return {
        ...state,
        products: action.payload,
      };
  }
};
