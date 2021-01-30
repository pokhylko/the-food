import { combineReducers } from 'redux';

import { filters } from './filters';
import { products } from './products';

export const rootReducer = combineReducers({
  filters,
  products,
});
