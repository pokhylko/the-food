import React from 'react';

import './Header.scss';

import logo from '../../images/logo.png';
import cartIcon from '../../images/cart-icon.svg';

export const Header = () => (
  <header className="header">
    <div className="container header__container">
      <img className="logo" src={logo} alt="logo" />

      <button className="button button--cart" type="button">
        <span className="price">£0</span>
        <img className="icon" src={cartIcon} alt="cart icon" />
        <span className="value">0</span>
      </button>
    </div>
  </header>
);
