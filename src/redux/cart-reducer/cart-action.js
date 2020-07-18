const toggleShoppingCart = value => {
    return {
        type:"CART_TOGGLE",
        payload:value
    }
};

export default toggleShoppingCart;