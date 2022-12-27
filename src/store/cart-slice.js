import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalItems: 0,
    totalAmount:0
  },
  reducers: {
    replaceCart(state,action){
        state.items = action.payload.items
        state.totalItems = action.payload.totalItems
        state.totalAmount = action.payload.totalAmount
    },
    addToCart(state, action) {
      const itemInd = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemInd === -1) {
        state.items.push(action.payload);
        state.totalItems++;
      }else{
        state.items[itemInd].quantity++
      }
      state.totalAmount+=action.payload.price
    },
    increaseQuantity(state,action){
        const itemInd = state.items.findIndex(item=>item.id===action.payload)
        state.items[itemInd].quantity++
        state.totalAmount+=state.items[itemInd].price
    },
    decreaseQuantity(state,action){
        const itemInd = state.items.findIndex(item=>item.id===action.payload)
        state.totalAmount-=state.items[itemInd].price
        if(state.items[itemInd].quantity === 1){
            state.items.splice(itemInd,1)
            state.totalItems--
        }else{
            state.items[itemInd].quantity--
        }
        
    },

  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
