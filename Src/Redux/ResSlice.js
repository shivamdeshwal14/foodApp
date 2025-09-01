import { createSlice } from "@reduxjs/toolkit";



const ResSlice=createSlice({
    name:'restaurant',
    initialState:{
        res:[]
    },
    reducers:{
        addRes:(state,action)=>{
            const restaurant=action.payload;
            state.res=[{restaurant}];
        },
        remRes:(state)=>{
            state.res=[];
        }
    }
});

export default ResSlice.reducer;
export const {addRes,remRes}=ResSlice.actions;