import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const totalItems = useSelector(state => state.cart.totalItems);

  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px 20px',
      backgroundColor: '#4CAF50',
      color: 'white'
    }}>
      <h2>GreenLeaf Plants</h2>
      <nav>
        <Link to="/products" style={{ marginRight: '20px', color: 'white' }}>Products</Link>
        <Link to="/cart" style={{ color: 'white' }}>Cart ({totalItems})</Link>
      </nav>
    </header>
  );
}

export default Header;
