import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { getCartItems, sendingPutRequest } from './store/cart-actions';


let isInitial = true;

function App() {
  const showToggleCart = useSelector(state=>state.ui.cartIsVisible)
  const selectCart = useSelector(state=>state.cart)
  const selectNotification = useSelector(state=>state.ui.notification)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getCartItems())
  },[dispatch])

  useEffect(()=>{
    if(isInitial){
      isInitial=false
      return
    }
    dispatch(sendingPutRequest(selectCart))
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
