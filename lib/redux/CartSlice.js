import { getCookie, setCookie } from "cookies-next";

const { createSlice } = require("@reduxjs/toolkit");

const checkCart = () => {
    if (getCookie("cartItems")) {
        return JSON.parse(getCookie("cartItems"));
    } else {
        return [];
    }
};

const calcTotalAmount = (cart) => {
    const total = cart.reduce((acc, item) => {
        acc = +item.price + acc;
        return acc;
    }, 0);
    return total.toFixed(2);
};

const checkTotalAmount = () => {
    const cart = checkCart();
    if (cart.length > 0) {
        return calcTotalAmount(cart);
    } else {
        return 0;
    }
};

const CartSlice = createSlice({
    name: "CartSlice",
    initialState: {
        cartItems: checkCart(),
        totalPrice: checkTotalAmount(),
        sideCartIsOpen: false
    },
    reducers: {
        addtoCart: (state, action) => {
            const isExits = state.cartItems.some((item) => item._id === action.payload._id);
            if (!isExits) {
                state.cartItems.push(action.payload);
            }
            state.totalPrice = calcTotalAmount(state.cartItems);
            setCookie("cartItems", state.cartItems);
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item._id != action.payload);
            state.totalPrice = calcTotalAmount(state.cartItems);
            setCookie("cartItems", state.cartItems);
        },
        openSideCart: (state) => {
            state.sideCartIsOpen = true
        },
        closeSideCart: (state) => {
            state.sideCartIsOpen = false
        },
    },
});

export const { addtoCart, removeFromCart,openSideCart,closeSideCart } = CartSlice.actions;

export default CartSlice.reducer;
