


export const CartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            let cart = [];
            
            if (state.cart.some((p) => p.id === action.payload.id)) {
                cart = state.cart.map((p) => {
                    if (p.id === action.payload.id) {
                        p.items++;
                    }
                    return p;
                });
            } else {
                cart = [...state.cart, action.payload];
            }

            return {
                ...state,
                cart,
            };
            
        default:
            return state
    }
}