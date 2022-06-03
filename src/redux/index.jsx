import { configureStore } from '@reduxjs/toolkit';
import { PriceReducer } from './reducers/setPrice';
import { ColorReducer } from './reducers/setColor';
import { SizeReducer } from './reducers/setSize';
import { OrderReducer } from './reducers/setOrderBy';

export const store = configureStore({
  reducer: {
    size: SizeReducer,
    color: ColorReducer,
    price: PriceReducer,
    order: OrderReducer
  }
});
