import { configureStore } from '@reduxjs/toolkit';
import { ColorReducer } from './reducers/setColor';
import { SizeReducer } from './reducers/setSize';

export const store = configureStore({
  reducer: {
    size: SizeReducer,
    color: ColorReducer
  }
});
