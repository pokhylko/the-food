import React from 'react';
import PropTypes from 'prop-types';

import { Categories } from '../components/Categories';
import { SortProducts } from '../components/SortProducts';
import { Product } from '../components/Product';

export const Home = ({ products }) => (
  <div className="container">
    <div className="content__filter">
      <Categories
        categories={['Our Favourites', 'Beef', 'Chicken', 'Pork']}
      />
      <SortProducts sortItems={['best selling', 'price', 'alphabetically']} />
    </div>
    <h2 className="content__title">All burgers</h2>
    <div className="content__items">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  </div>
);

Home.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
};
