import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './feutures/cartSlice'

export default configureStore({
  reducer: {
    cart: cartReducer
  }
})