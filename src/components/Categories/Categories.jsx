import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Categories.scss';

export const Categories = ({ categories }) => {
  const [currentCategory, setCurrentCategory] = useState(null);

  const onSelectCategory = (index) => {
    setCurrentCategory(index);
  };

  return (
    <div className="categories">
      <ul className="categories__list">
        <li className="categories__item">
          <button
            className={classNames(
              'categories__link',
              { active: currentCategory === null },
            )}
            type="button"
            onClick={() => onSelectCategory(null)}
          >
            All
          </button>
        </li>

        {categories
          && categories.map((category, index) => (
            <li className="categories__item" key={category}>
              <button
                className={classNames(
                  'categories__link',
                  { active: currentCategory === index },
                )}
                type="button"
                onClick={() => onSelectCategory(index)}
              >
                {category}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};
