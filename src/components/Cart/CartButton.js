import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
const dispatch = useDispatch()
const totalItemsOfCart = useSelector(state=>state.cart.totalItems)
  const toggleCartHandler = ()=>{
    dispatch(uiActions.toggle())
  }
  return (
    <button onClick={toggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItemsOfCart}</span>
    </button>
  );
};

export default CartButton;
