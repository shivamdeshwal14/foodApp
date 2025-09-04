import { createSlice } from "@reduxjs/toolkit";

const loadResFromLS=()=>{
    try {
        const res=localStorage.getItem("res");
        
        return res ? JSON.parse(res) :[];
    } catch (error) {
        console.log("Error in getting res fromlocalStoarge",error);
        return [];
        
        
    }
}

const ResSlice=createSlice({
    name:'restaurant',
    initialState:{
        res:loadResFromLS()
    },
    reducers:{
        addRes:(state,action)=>{
            const restaurant=action.payload;
            state.res=restaurant;
            localStorage.setItem("res",JSON.stringify(restaurant));
        },
        remRes:(state)=>{
            state.res=null;
            localStorage.removeItem("res");
        }
    }
});

export default ResSlice.reducer;
export const {addRes,remRes}=ResSlice.actions;