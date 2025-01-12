import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

interface Chef {
  _id: string;
  name: string;
  image: string;
  restaurantIds: string[];
  chefInfo?: string;

}

interface ChefState {
  items: Chef[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: ChefState = {
  items: [],
  status: 'idle',
};

export const fetchChef = createAsyncThunk('chefRestaurant/fetchChef', async () => {
    try {
      const response = await axios.get('http://localhost:3000/chefs');
      return response.data.data; 
    } catch (error) {
      console.error('Error fetching chefs:', error);
      throw error; 
    }
  });

const chefSlice = createSlice({
  name: 'chef',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChef.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchChef.fulfilled, (state, action) => {
        state.status = 'succeeded';        
        state.items = action.payload;
      })
      .addCase(fetchChef.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

// Selectors
export const selectChef = (state: RootState) => state.chef.items;
export const selectChefStatus = (state: RootState) => state.chef.status;

export default chefSlice.reducer;
