import React from 'react';
import { useSelector } from 'react-redux';

import { Categories } from '../components/Categories';
import { SortProducts } from '../components/SortProducts';
import { Product } from '../components/Product';

export const Home = () => {
  const products = useSelector((state) => state.products.items);

  return (
    <div className="container">
      <div className="content__filter">
        <Categories
          categories={['Our Favourites', 'Beef', 'Chicken', 'Pork']}
        />
        <SortProducts sortItems={[
          { name: 'best selling', type: 'best-selling' },
          { name: 'price', type: 'price' },
          { name: 'alphabetically', type: 'alphabetically' },
        ]}
        />
      </div>
      <h2 className="content__title">All burgers</h2>
      <div className="content__items">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
