import CartContext from "./cart-context";

const CartProvider = props => {

    const addItemToCartHandeler = (item) => {};

    const removeItemFromCartHandeler = (id) => {};

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandeler,
        removeItem: removeItemFromCartHandeler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;