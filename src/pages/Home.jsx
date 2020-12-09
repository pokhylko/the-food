import React from 'react';

import { Categories } from '../components/Categories';
import { SortProducts } from '../components/SortProducts';

export const Home = () => (
  <div className="container">
    <div className="content__filter">
      <Categories
        categories={['Our Favourites', 'Beef', 'Chicken', 'Pork']}
      />
      <SortProducts sortItems={['best selling', 'price', 'alphabetically']} />
    </div>
    <h2 className="content__title">All burgers</h2>
    <div className="content__items">
      <div className="product">
        <img
          className="product__image"
          src="https://theburger.ua/wp-content/uploads/Arkansas-min-1.jpg"
          alt="burger"
        />
        <h4 className="product__title">«Arkansas»</h4>
        <div className="product__selector selector">
          <ul className="selector__type">
            <li className="selector__item active">classic</li>
            <li className="selector__item">vegan</li>
          </ul>
          <ul className="selector__type">
            <li className="selector__item active">M</li>
            <li className="selector__item">L</li>
            <li className="selector__item">XL</li>
          </ul>
        </div>
        <div className="product__bottom">
          <div className="product__price">from £25.00</div>
          <div className="button button--black button--add">
            Add to cart
            <span>2</span>
          </div>
        </div>
      </div>

      <div className="product">
        <img
          className="product__image"
          src="https://theburger.ua/wp-content/uploads/Arkansas-min-1.jpg"
          alt="burger"
        />
        <h4 className="product__title">«Arkansas»</h4>
        <div className="product__selector selector">
          <ul className="selector__type">
            <li className="selector__item active">classic</li>
            <li className="selector__item">vegan</li>
          </ul>
          <ul className="selector__type">
            <li className="selector__item active">M</li>
            <li className="selector__item">L</li>
            <li className="selector__item">XL</li>
          </ul>
        </div>
        <div className="product__bottom">
          <div className="product__price">from £25.00</div>
          <div className="button button--black button--add">
            Add to cart
            <span>2</span>
          </div>
        </div>
      </div>

      <div className="product">
        <img
          className="product__image"
          src="https://theburger.ua/wp-content/uploads/Arkansas-min-1.jpg"
          alt="burger"
        />
        <h4 className="product__title">«Arkansas»</h4>
        <div className="product__selector selector">
          <ul className="selector__type">
            <li className="selector__item active">classic</li>
            <li className="selector__item">vegan</li>
          </ul>
          <ul className="selector__type">
            <li className="selector__item active">M</li>
            <li className="selector__item">L</li>
            <li className="selector__item">XL</li>
          </ul>
        </div>
        <div className="product__bottom">
          <div className="product__price">from £25.00</div>
          <div className="button button--black button--add">
            Add to cart
            <span>2</span>
          </div>
        </div>
      </div>

      <div className="product">
        <img
          className="product__image"
          src="https://theburger.ua/wp-content/uploads/Arkansas-min-1.jpg"
          alt="burger"
        />
        <h4 className="product__title">«Arkansas»</h4>
        <div className="product__selector selector">
          <ul className="selector__type">
            <li className="selector__item active">classic</li>
            <li className="selector__item">vegan</li>
          </ul>
          <ul className="selector__type">
            <li className="selector__item active">M</li>
            <li className="selector__item">L</li>
            <li className="selector__item">XL</li>
          </ul>
        </div>
        <div className="product__bottom">
          <div className="product__price">from £25.00</div>
          <div className="button button--black button--add">
            Add to cart
            <span>2</span>
          </div>
        </div>
      </div>

      <div className="product">
        <img
          className="product__image"
          src="https://theburger.ua/wp-content/uploads/Arkansas-min-1.jpg"
          alt="burger"
        />
        <h4 className="product__title">«Arkansas»</h4>
        <div className="product__selector selector">
          <ul className="selector__type">
            <li className="selector__item active">classic</li>
            <li className="selector__item">vegan</li>
          </ul>
          <ul className="selector__type">
            <li className="selector__item active">M</li>
            <li className="selector__item">L</li>
            <li className="selector__item">XL</li>
          </ul>
        </div>
        <div className="product__bottom">
          <div className="product__price">from £25.00</div>
          <div className="button button--black button--add">
            Add to cart
            <span>2</span>
          </div>
        </div>
      </div>

      <div className="product">
        <img
          className="product__image"
          src="https://theburger.ua/wp-content/uploads/Arkansas-min-1.jpg"
          alt="burger"
        />
        <h4 className="product__title">«Arkansas»</h4>
        <div className="product__selector selector">
          <ul className="selector__type">
            <li className="selector__item active">classic</li>
            <li className="selector__item">vegan</li>
          </ul>
          <ul className="selector__type">
            <li className="selector__item active">M</li>
            <li className="selector__item">L</li>
            <li className="selector__item">XL</li>
          </ul>
        </div>
        <div className="product__bottom">
          <div className="product__price">from £25.00</div>
          <div className="button button--black button--add">
            Add to cart
            <span>2</span>
          </div>
        </div>
      </div>

      <div className="product">
        <img
          className="product__image"
          src="https://theburger.ua/wp-content/uploads/Arkansas-min-1.jpg"
          alt="burger"
        />
        <h4 className="product__title">«Arkansas»</h4>
        <div className="product__selector selector">
          <ul className="selector__type">
            <li className="selector__item active">classic</li>
            <li className="selector__item">vegan</li>
          </ul>
          <ul className="selector__type">
            <li className="selector__item active">M</li>
            <li className="selector__item">L</li>
            <li className="selector__item">XL</li>
          </ul>
        </div>
        <div className="product__bottom">
          <div className="product__price">from £25.00</div>
          <div className="button button--black button--add">
            Add to cart
            <span>2</span>
          </div>
        </div>
      </div>

      <div className="product">
        <img
          className="product__image"
          src="https://theburger.ua/wp-content/uploads/Arkansas-min-1.jpg"
          alt="burger"
        />
        <h4 className="product__title">«Arkansas»</h4>
        <div className="product__selector selector">
          <ul className="selector__type">
            <li className="selector__item active">classic</li>
            <li className="selector__item">vegan</li>
          </ul>
          <ul className="selector__type">
            <li className="selector__item active">M</li>
            <li className="selector__item">L</li>
            <li className="selector__item">XL</li>
          </ul>
        </div>
        <div className="product__bottom">
          <div className="product__price">from £25.00</div>
          <div className="button button--black button--add">
            Add to cart
            <span>2</span>
          </div>
        </div>
      </div>

      <div className="product">
        <img
          className="product__image"
          src="https://theburger.ua/wp-content/uploads/Arkansas-min-1.jpg"
          alt="burger"
        />
        <h4 className="product__title">«Arkansas»</h4>
        <div className="product__selector selector">
          <ul className="selector__type">
            <li className="selector__item active">classic</li>
            <li className="selector__item">vegan</li>
          </ul>
          <ul className="selector__type">
            <li className="selector__item active">M</li>
            <li className="selector__item">L</li>
            <li className="selector__item">XL</li>
          </ul>
        </div>
        <div className="product__bottom">
          <div className="product__price">from £25.00</div>
          <div className="button button--black button--add">
            Add to cart
            <span>2</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
