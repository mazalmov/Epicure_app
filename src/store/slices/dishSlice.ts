import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

interface Dish {
  _id: string;
  name: string;
  image: string;
  iconMeaning: string;
  ingredients: string[];
  price: number;
}

interface DishState {
  items: Dish[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: DishState = {
  items: [],
  status: 'idle',
};

export const fetchDishes = createAsyncThunk('dishes/fetchDishes', async () => {
    try {
      const response = await axios.get('http://localhost:3000/dishes');
      return response.data.data; 
    } catch (error) {
      console.error('Error fetching dishes:', error);
      throw error; 
    }
  });

// יצירת slice
const dishSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDishes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDishes.fulfilled, (state, action) => {
        state.status = 'succeeded';        
        state.items = action.payload;
      })
      .addCase(fetchDishes.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

// Selectors
export const selectDishes = (state: RootState) => state.dishes.items;
export const selectDishesStatus = (state: RootState) => state.dishes.status;

export default dishSlice.reducer;
