import { configureStore } from "@reduxjs/toolkit"
import loginslice from "../reducer/loginslice";
import cartReducer from "../reducer/cartslice";
import singupSlice from "../reducer/singupSlice";

const store = configureStore({
    reducer:{
        Login: loginslice,
        SignUp: singupSlice,
        cart: cartReducer,
    },
});

export default store;
