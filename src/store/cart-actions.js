import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const getCartItems = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://quotes-21aa6-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("failed to find data!!");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cart = await fetchData();
      dispatch(cartActions.replaceCart(cart));
    } catch (error) {
      uiActions.addNotification("error");
    }
  };
};

export function sendingPutRequest(selectCart) {
  return async (dispatch) => {
      dispatch(uiActions.addNotification("sending"));
      const response = await fetch(
        `https://quotes-21aa6-default-rtdb.firebaseio.com/cart.json`,
        {
          method: "PUT",
          body: JSON.stringify(selectCart),
          headers: {
            "content-type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("sending Request is failed");
      }
      try{
        dispatch(uiActions.addNotification("success"));
      }catch(error){
        dispatch(uiActions.addNotification("error"));
      }
  };
}

