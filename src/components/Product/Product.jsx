import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Product.scss';

export const Product = ({ product }) => {
  const {
    name, imageUrl, price, types, sizes,
  } = product;
  const TYPES = ['classic', 'vegan'];
  const SIZES = ['M', 'L', 'XL'];
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const onSelectType = (index) => {
    setActiveType(index);
  };

  const onSelectSize = (index) => {
    setActiveSize(index);
  };

  return (
    <div className="product">
      <img
        className="product__image"
        src={imageUrl}
        alt={name}
      />
      <h4 className="product__title">{`«${name}»`}</h4>
      <div className="product__selector selector">
        <ul className="selector__type">
          {TYPES.map((type, index) => (
            <li className="selector__item" key={type}>
              <button
                className={classNames(
                  'selector__link',
                  {
                    active: activeType === index,
                    disabled: !types.includes(index),
                  },
                )}
                type="button"
                onClick={() => onSelectType(index)}
              >
                {type}
              </button>
            </li>
          ))}
        </ul>

        <ul className="selector__size">
          {SIZES.map((size, index) => (
            <li className="selector__item" key={size}>
              <button
                className={classNames(
                  'selector__link',
                  {
                    active: activeSize === index,
                    disabled: !sizes.includes(index),
                  },
                )}
                type="button"
                onClick={() => onSelectSize(index)}
              >
                {size}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="product__bottom">
        <div className="product__price">{`from £${price}`}</div>
        <div className="button button--black button--add">
          Add to cart
          <span>2</span>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape(
    PropTypes.string,
  ).isRequired,
};
