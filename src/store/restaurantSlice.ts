import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RestaurantCardProps } from '../components/RestaurantCard';

interface IRestaurantSlice {
  restaurant?: RestaurantCardProps;
}

const initialState: IRestaurantSlice = {};

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action: PayloadAction<RestaurantCardProps>) => {
      state.restaurant = action.payload;
    }
  }
});

export const { setRestaurant } = restaurantSlice.actions;

export default restaurantSlice.reducer;
