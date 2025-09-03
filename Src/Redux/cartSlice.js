import { createSlice } from "@reduxjs/toolkit";


const loadCartFromLocalStoarge=()=>{
    try {
        const savedCart=localStorage.getItem("cartItems");
        return savedCart ? JSON.parse(savedCart) :[];
    
    } catch (error) {
        console.log("Error in loading cart fromlocal storage IN cartSlice===> ",error);
        return [];
        
    }
}

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:loadCartFromLocalStoarge()
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

            localStorage.setItem("cartItems",JSON.stringify(state.items));
        

        },
        removeItem:(state,action)=>{
            const item=action.payload;
            const existingItem=state.items.find(i=>i.card.info.id===item.card.info.id);

            if(existingItem){
                if(existingItem.quantity>1) existingItem.quantity-=1;
                else state.items=state.items.filter(i=>i.card.info.id!=item.card.info.id)
            }
              localStorage.setItem("cartItems",JSON.stringify(state.items));
        },
        // no action needed
        clearCart:(state)=>{
            state.items.length=0;
            localStorage.removeItem("cartItems")
        }
    }
})

export default cartSlice.reducer;
export const{addItem,removeItem,clearCart}=cartSlice.actions;