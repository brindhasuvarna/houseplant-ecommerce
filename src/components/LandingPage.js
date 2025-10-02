import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundImage: "url('background.jpg')", backgroundSize:'cover', textAlign:'center', padding:'50px', color:'#fff', height:'100vh' }}>
      <h1>GreenLeaf Plants</h1>
      <p>We bring nature closer to your home with beautiful and easy-to-care-for houseplants.</p>
      <button onClick={() => navigate('/products')}>Get Started</button>
    </div>
  );
};

export default LandingPage;
