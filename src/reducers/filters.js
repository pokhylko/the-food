import { SET_SORT_BY } from '../actions/types';

const initialState = {
  category: 0,
  sortBy: 'popular',
};

export const filters = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };
    default:
      return state;
  }
};
