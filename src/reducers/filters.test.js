import { filters } from './filters';

import { SET_SORT_BY } from '../actions/types';

let state;

beforeEach(() => {
  state = {
    category: 0,
    sortBy: 'popular',
  };
});

describe('set sort by', () => {
  test('change sort by', () => {
    const action = {
      type: SET_SORT_BY,
      payload: 'alphabet',
    };
    const newState = filters(state, action);

    expect(newState.sortBy).toStrictEqual('alphabet');
  });

  test('wrong type', () => {
    const action = {
      type: 'WRONG_TYPE',
      payload: 'alphabet',
    };
    const newState = filters(state, action);

    expect(newState.sortBy).toStrictEqual('popular');
  });
});
