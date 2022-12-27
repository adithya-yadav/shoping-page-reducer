import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { uiActions } from './store/ui-slice';

let isInitial = true;

function App() {
  const showToggleCart = useSelector(state=>state.ui.cartIsVisible)
  const selectCart = useSelector(state=>state.cart)
  const selectNotification = useSelector(state=>state.ui.notification)
  const dispatch = useDispatch()
  useEffect(()=>{
    async function sendingPutRequest(){
      dispatch(uiActions.addNotification("sending"))
      const response =await fetch(`https://quotes-21aa6-default-rtdb.firebaseio.com/cart.json`,{
        method:'PUT',
        body:JSON.stringify(selectCart),
        headers:{
          'content-type':'application/json'
        }
      })
      if(response.ok){
        dispatch(uiActions.addNotification("success"))
      }else{
        throw new Error("sending Request is failed")
      }
    }
    if(isInitial){
      isInitial=false
      return
    }

    sendingPutRequest().catch((error)=>{
      dispatch(uiActions.addNotification("error"))
    })
  },[selectCart,dispatch])
  return (
    <Fragment>
      {selectNotification.status && <Notification status={selectNotification.status} title={selectNotification.title} message={selectNotification.message} />}
    <Layout>
      {showToggleCart && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
