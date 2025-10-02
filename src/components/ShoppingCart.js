// src/components/ShoppingCart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQty, decreaseQty, removeItem } from '../redux/cartSlice';

const ShoppingCart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Shopping Cart</h1>
      {cart.items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.items.map(item => (
            <div key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', gap:'10px' }}>
              <img src={item.img} alt={item.name} style={{ width: '80px', height: '80px' }} />
              <div>
                <h4>{item.name}</h4>
                <p>Unit Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
                <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
                <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
              </div>
            </div>
          ))}
          <h3>Total Items: {cart.totalQuantity}</h3>
          <h3>Total Price: ${cart.totalPrice}</h3>
          <button onClick={() => alert('Coming Soon')}>Checkout</button>
          <button onClick={() => window.location.href = '/products'}>Continue Shopping</button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
