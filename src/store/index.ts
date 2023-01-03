import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './basketSlice';
import restaurantReducer from './restaurantSlice';

export const store = configureStore({
  reducer: { basket: basketReducer, restaurant: restaurantReducer }
});

// Define Root State and Dispatch Types
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Reference:
// https://redux-toolkit.js.org/tutorials/typescript
