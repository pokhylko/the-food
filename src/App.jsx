import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Home, Cart } from './pages';

import './App.scss';

export const App = () => (
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
