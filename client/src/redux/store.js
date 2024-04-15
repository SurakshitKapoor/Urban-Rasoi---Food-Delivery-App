import { configureStore } from '@reduxjs/toolkit'
import isLoggedInReducer from './Slices/isLoggedIn';
import cartReducer from './Slices/cart';


export const Store = configureStore({
  reducer: {
    isLoggedIn:isLoggedInReducer,
    cart:cartReducer
  },
})