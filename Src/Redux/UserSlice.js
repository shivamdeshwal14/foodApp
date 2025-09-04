import { createSlice } from "@reduxjs/toolkit";

const loadUserFromLocalStorage=()=>{
    try {
    const user=localStorage.getItem("user")
    return user ? JSON.parse(user): null;
    } catch (error) {
        console.log("error in loading user form LS",error)
        return null;
    }
    
}

const UserSlice=createSlice({
    name:"user",
    initialState:{
        userDetails:loadUserFromLocalStorage()
    },
    reducers:{
        addUser:(state,action)=>{
            const user=action.payload;
            state.userDetails=user;

            localStorage.setItem("user",JSON.stringify(user));
        },
        removeUser:(state)=>{
            state.userDetails=null;
            localStorage.removeItem("user")
        }
    }
})

export default UserSlice.reducer;
export const {addUser,removeUser} = UserSlice.actions;