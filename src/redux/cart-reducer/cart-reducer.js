const INITIAL_STATE = {
    toggleCart: false
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "CART_TOGGLE":
            return {
                ...state,
            toggleCart : action.payload
            }        
    
        default:
            return state;
    }
};

export default cartReducer;