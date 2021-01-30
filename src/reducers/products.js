import { SET_PRODUCTS } from '../actions/types';

const initialState = {
  items: [],
  isLoaded: false,
};

export const products = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};
