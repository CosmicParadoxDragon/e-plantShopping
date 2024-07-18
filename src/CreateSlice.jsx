import { createSlice } from '@reduxjs/toolkit';

export const CreatSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const {name, image, cost} = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
            item.quantity += 1;
        } else {
            state.items.push({name, image, cost, quantity: 1});
        }
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(item => action.payload !== item.name);
    },
    updateQuantity: (state, action) => {
        const {name, quantity} = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
            item.quantity = quantity;
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CreatSlice.actions;

export default CreatSlice.reducer;
