import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import resReducer from "./ResSlice";


const appStore=configureStore({
    reducer:{
        cart:cartReducer,
        restaurant:resReducer  
    }
}

);

export default appStore;