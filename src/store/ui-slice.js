import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    cartIsVisible: false,
    notification:{
        status:null,
        title:null,
        message:null
    }
  },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    addNotification(state,action){
        if(action.payload === 'sending'){
            state.notification.status = action.payload
            state.notification.title = "Sending..."
            state.notification.message = "Sending cart data!"
        }else if(action.payload === "success"){
            state.notification.status = action.payload
            state.notification.title = "Success!"
            state.notification.message = "Sending cart data successfully!"
        }else{
            state.notification.status = action.payload
            state.notification.title = "Error!"
            state.notification.message = "Sending cart data failed!"
        }
    }
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;