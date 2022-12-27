import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartItems = useSelector(state=>state.cart.items)
  const totalAmount = useSelector(state=>state.cart.totalAmount)
  return (
    <Card className={classes.cart}>
      <div className={classes.headers}>
      <h2>Your Shopping Cart</h2>
      <h2>Total Amount : {totalAmount.toFixed(2)}</h2>
      </div>
      <ul>
        {cartItems.map((cartitem,ind)=>{
          const total = cartitem.price*cartitem.quantity
          return <CartItem key={ind}
          item={{ title: cartitem.title, quantity: cartitem.quantity, total: total, price: cartitem.price,id:cartitem.id }}
        />
        })}
       
      </ul>
    </Card>
  );
};

export default Cart;
