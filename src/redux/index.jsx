import { configureStore } from '@reduxjs/toolkit';
import { SizeReducer } from './reducers/setSize';

export const store = configureStore({
  reducer: {
    size: SizeReducer
  }
});
