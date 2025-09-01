import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        // reducer function takes action and state state means state.items=items acess
        addItem:(state,action)=>{
            const {item,resId}=action.payload;
            if(state.items.length===0){
                state.items.push({...item,quantity:1,resId});
                return;
            }
            const currentRes=state.items[0].resId;
            
            if(currentRes==resId){
                    const existingItem=state.items.find(i=>i?.card?.info?.id==item?.card?.info?.id);
                    if(existingItem){
                        existingItem.quantity+=1;
                    }else{
                        state.items.push({...item,quantity:1,resId});
                    }
            }
            else{
             console.log("CART CLEARED")
             state.items=[{...item,quantity:1,resId}];

            }
        

        },
        removeItem:(state,action)=>{
            const item=action.payload;
            const existingItem=state.items.find(i=>i.card.info.id===item.card.info.id);

            if(existingItem){
                if(existingItem.quantity>1) existingItem.quantity-=1;
                else state.items=state.items.filter(i=>i.card.info.id!=item.card.info.id)
            }
            
        },
        // no action needed
        clearCart:(state)=>{
            state.items.length=0;
        }
    }
})

export default cartSlice.reducer;
export const{addItem,removeItem,clearCart}=cartSlice.actions;