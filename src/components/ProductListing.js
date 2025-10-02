import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const products = [
  {id:1, name:'Aloe Vera', category:'Succulent', price:150, image:'aloe.jpg'},
  {id:2, name:'Snake Plant', category:'Indoor', price:200, image:'snake.jpg'},
  {id:3, name:'Fiddle Leaf Fig', category:'Indoor', price:500, image:'fig.jpg'},
  {id:4, name:'Jade Plant', category:'Succulent', price:300, image:'jade.jpg'},
  {id:5, name:'Peace Lily', category:'Flowering', price:400, image:'peace.jpg'},
  {id:6, name:'Orchid', category:'Flowering', price:600, image:'orchid.jpg'},
];

const ProductListing = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleAdd = (product) => {
    dispatch(addItem(product));
  }

  return (
    <div style={{ padding:'20px' }}>
      <h2>Products</h2>
      <div style={{ display:'flex', flexWrap:'wrap', gap:'20px' }}>
        {products.map(p => (
          <div key={p.id} style={{ border:'1px solid #ccc', padding:'10px', width:'150px', textAlign:'center' }}>
            <img src={p.image} alt={p.name} style={{ width:'100px', height:'100px' }}/>
            <h4>{p.name}</h4>
            <p>₹{p.price}</p>
            <button
              onClick={() => handleAdd(p)}
              disabled={cartItems.some(item => item.id === p.id)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListing;

