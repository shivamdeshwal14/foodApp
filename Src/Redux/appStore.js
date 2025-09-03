import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import resReducer from "./ResSlice";
import userReducer from "./UserSlice"

const appStore=configureStore({
    reducer:{
        cart:cartReducer,
        restaurant:resReducer,
        user:userReducer
    }
}

);

export default appStore;