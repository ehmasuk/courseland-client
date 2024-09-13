import { configureStore } from "@reduxjs/toolkit";
import AuthChekerSlice from "./AuthChekerSlice";
import CartSlice from "./CartSlice";

const store = configureStore({
    reducer: {
        AuthChekerSlice,
        CartSlice
    },
});

export default store;
