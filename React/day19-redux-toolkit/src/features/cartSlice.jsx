import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cartItems:null,
    },
    reducers:{
        addToCart:(state,actions)=>{
            state.cartItems=actions.payload
        },
        removeFromCart:()=>{}
    }
})

export const {addToCart,removeFromCart} = cartSlice.actions;
export default cartSlice.reducer