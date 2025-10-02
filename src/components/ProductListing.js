// src/components/ProductListing.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const plants = [
  { id: 1, name: 'Fiddle Leaf Fig', price: 25, category: 'Indoor', img: 'fiddle.jpg' },
  { id: 2, name: 'Snake Plant', price: 15, category: 'Indoor', img: 'snake.jpg' },
  { id: 3, name: 'Aloe Vera', price: 10, category: 'Succulents', img: 'aloe.jpg' },
  { id: 4, name: 'Jade Plant', price: 12, category: 'Succulents', img: 'jade.jpg' },
  { id: 5, name: 'Lavender', price: 20, category: 'Outdoor', img: 'lavender.jpg' },
  { id: 6, name: 'Rosemary', price: 18, category: 'Outdoor', img: 'rosemary.jpg' }
];

const categories = [...new Set(plants.map(p => p.category))];

const ProductListing = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div style={{ padding: '20px' }}>
      {categories.map(category => (
        <div key={category}>
          <h2>{category}</h2>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {plants.filter(p => p.category === category).map(plant => (
              <div key={plant.id} style={{ border: '1px solid #ccc', padding: '10px', width: '150px', textAlign: 'center' }}>
                <img src={plant.img} alt={plant.name} style={{ width: '100px', height: '100px' }} />
                <h4>{plant.name}</h4>
                <p>${plant.price}</p>
                <button onClick={() => handleAddToCart(plant)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
