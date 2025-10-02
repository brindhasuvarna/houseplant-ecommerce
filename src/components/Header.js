// src/components/Header.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const cart = useSelector(state => state.cart);

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px', background: '#4CAF50', color: '#fff' }}>
      <h2>GreenLeaf Plants</h2>
      <nav>
        <Link to="/products" style={{ margin: '0 10px', color: '#fff' }}>Products</Link>
        <Link to="/cart" style={{ margin: '0 10px', color: '#fff' }}>
          Cart ({cart.totalQuantity})
        </Link>
      </nav>
    </header>
  );
};

export default Header;
