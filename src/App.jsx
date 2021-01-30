import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Header } from './components/Header';
import { Home, Cart } from './pages';

import { getProducts } from './api/products';
import { setProducts } from './actions/products';

import './App.scss';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts()
      .then((productsFromServer) => dispatch(setProducts(productsFromServer.burgers)));
  }, []);

  return (
    <div className="App">
      <Header />

      <main className="content">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </main>
    </div>
  );
};
