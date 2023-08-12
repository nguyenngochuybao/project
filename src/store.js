// store.js
import { configureStore } from '@reduxjs/toolkit';
import orderSlice from './redux/orderSlice';




const store = configureStore({
  reducer: {
    order: orderSlice,
  },
});

export default store;
