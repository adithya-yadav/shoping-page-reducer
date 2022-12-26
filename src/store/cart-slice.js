import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalItems:0
    },
    reducers:{
        addToCart(state,action){
            state.items.push(action.payload)
            state.totalItems++
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;