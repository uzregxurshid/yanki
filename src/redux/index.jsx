import { configureStore } from '@reduxjs/toolkit';
import { PriceReducer } from './reducers/setPrice';
import { ColorReducer } from './reducers/setColor';
import { SizeReducer } from './reducers/setSize';

export const store = configureStore({
  reducer: {
    size: SizeReducer,
    color: ColorReducer,
    price: PriceReducer
  }
});
