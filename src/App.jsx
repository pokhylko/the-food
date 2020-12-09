import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Home, Cart } from './pages';

import { getProducts } from './api/products';

import './App.scss';

export const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((productsFromServer) => setProducts(productsFromServer.burgers));
  }, []);

  return (
    <div className="App">
      <Header />

      <main className="content">
        <Switch>
          <Route path="/" exact render={() => <Home products={products} />} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </main>
    </div>
  );
};
