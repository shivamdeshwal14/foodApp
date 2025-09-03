import { createSlice } from "@reduxjs/toolkit";

const UserSlice=createSlice({
    name:"user",
    initialState:{
        userDetails:null
    },
    reducers:{
        addUser:(state,action)=>{
            const user=action.payload;
            state.userDetails=user;
        },
        removeUser:(state)=>{
            state.userDetails=null;
        }
    }
})

export default UserSlice.reducer;
export const {addUser,removeUser} = UserSlice.actions;