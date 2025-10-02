import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div style={{
      backgroundImage: "url('/background.jpg')",
      backgroundSize: 'cover',
      textAlign: 'center',
      padding: '100px',
      height: '100vh',
      color: 'white'
    }}>
      <h1>GreenLeaf Plants</h1>
      <p>Bringing nature closer to your home with beautiful houseplants.</p>
      <Link to="/products">
        <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
          Get Started
        </button>
      </Link>
    </div>
  );
}

export default LandingPage;

