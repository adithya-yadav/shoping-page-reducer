import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartItems = useSelector(state=>state.cart.items)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
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
