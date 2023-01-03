import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DishRowProps } from '../components/DishRow';

interface IBasketSlice {
  items: DishRowProps[];
}

const initialState: IBasketSlice = {
  items: []
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<DishRowProps>) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action: PayloadAction<{ id: string }>) => {
      const index = state.items.findIndex(
        (item) => action.payload.id === item.id
      );

      let newBasket = [...state.items];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.payload.id} as its not in basket!)`
        );
      }

      state.items = newBasket;
    }
  }
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export default basketSlice.reducer;
