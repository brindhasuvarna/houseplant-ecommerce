import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.totalItems += 1;
      state.totalPrice += action.payload.price;
    },
    increaseItem: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if(item){
        state.totalItems += 1;
        state.totalPrice += item.price;
      }
    },
    decreaseItem: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if(item){
        state.totalItems -= 1;
        state.totalPrice -= item.price;
      }
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex(i => i.id === action.payload);
      if(index !== -1){
        state.totalItems -= 1;
        state.totalPrice -= state.items[index].price;
        state.items.splice(index,1);
      }
    }
  }
});

export const { addItem, increaseItem, decreaseItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;

