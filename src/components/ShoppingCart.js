import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseItem, decreaseItem, removeItem } from '../redux/cartSlice';

const ShoppingCart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalItems = useSelector(state => state.cart.totalItems);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const dispatch = useDispatch();

  return (
    <div style={{ padding:'20px' }}>
      <h2>Shopping Cart</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: ₹{totalPrice}</p>
      {cartItems.map(item => (
        <div key={item.id} style={{ display:'flex', gap:'20px', marginBottom:'10px', alignItems:'center' }}>
          <img src={item.image} alt={item.name} style={{ width:'50px', height:'50px' }}/>
          <span>{item.name}</span>
          <span>₹{item.price}</span>
          <button onClick={() => dispatch(increaseItem(item.id))}>+</button>
          <button onClick={() => dispatch(decreaseItem(item.id))}>-</button>
          <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
        </div>
      ))}
      <button onClick={() => alert('Coming Soon!')}>Checkout</button>
      <button onClick={() => window.location.href="/products"}>Continue Shopping</button>
    </div>
  );
}

export default ShoppingCart;
