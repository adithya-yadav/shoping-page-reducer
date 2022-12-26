import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalItems: 0,
  },
  reducers: {
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
    },
    increaseQuantity(state,action){
        const itemInd = state.items.findIndex(item=>item.id===action.payload)
        state.items[itemInd].quantity++
    },
    decreaseQuantity(state,action){
        const itemInd = state.items.findIndex(item=>item.id===action.payload)
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
