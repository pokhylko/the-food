import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

import logo from '../../images/logo.png';
import cartIcon from '../../images/cart-icon.svg';

export const Header = () => (
  <header className="header">
    <div className="container header__container">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>

      <Link to="/cart" className="button button--cart">
        <span className="price">£0</span>
        <img className="icon" src={cartIcon} alt="cart icon" />
        <span className="value">0</span>
      </Link>
    </div>
  </header>
);
