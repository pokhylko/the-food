import { products } from './products';

import { SET_PRODUCTS } from '../actions/types';

let state;

beforeEach(() => {
  state = {
    items: [],
    isLoaded: false,
  };
});

describe('set products', () => {
  test('load all products', () => {
    const action = {
      type: SET_PRODUCTS,
      payload: [{
        id: 0,
        imageUrl: 'image.jpeg',
        name: 'First name',
        price: 25,
        category: 2,
        rating: 4,
      }, {
        id: 1,
        imageUrl: 'image.jpeg',
        name: 'Second name',
        price: 30,
        category: 1,
        rating: 5,
      }],
    };
    const newState = products(state, action);

    expect(newState.items).toStrictEqual([{
      id: 0,
      imageUrl: 'image.jpeg',
      name: 'First name',
      price: 25,
      category: 2,
      rating: 4,
    }, {
      id: 1,
      imageUrl: 'image.jpeg',
      name: 'Second name',
      price: 30,
      category: 1,
      rating: 5,
    }]);
  });

  test('wrong type', () => {
    const action = {
      type: 'WRONG_TYPE',
      payload: [{
        id: 0,
        imageUrl: 'image.jpeg',
        name: 'First name',
        price: 25,
        category: 2,
        rating: 4,
      }],
    };
    const newState = products(state, action);

    expect(newState.items).toStrictEqual([]);
  });
});
