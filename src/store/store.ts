import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer from './slices/restaurantSlice';
import dishReducer from './slices/dishSlice';
import chefReducer from './slices/chefSlice';

const store = configureStore({
  reducer: {
    restaurants: restaurantReducer,
    dishes: dishReducer,
    chef: chefReducer,

  },
});

export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch; 

export default store;

