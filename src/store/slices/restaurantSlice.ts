import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

interface Restaurant {
    _id: string;
    name: string;
    chefId: string; 
    dishIds: string[]; 
    image: string;
    rank: string;

  }
  
  interface RestaurantState {
    items: Restaurant[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
  }
  
  const initialState: RestaurantState = {
    items: [],
    status: 'idle',
  };

export const fetchRestaurants = createAsyncThunk('restaurants/fetchRestaurants',async () => {
    try {
        const response = await axios.get('http://localhost:3000/restaurants'); 
        return response.data.data; 
      } catch (error) {
        console.error('Error fetching restaurants:', error);
        throw error; 
      }
  });

const restaurantSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchRestaurants.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

// Selectors
export const selectRestaurants = (state: RootState) => state.restaurants.items;
export const selectRestaurantsStatus = (state: RootState) => state.restaurants.status;

export default restaurantSlice.reducer;
