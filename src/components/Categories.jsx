import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Categories.scss';

export const Categories = ({ categories }) => {
  const [currentCategory, setCurrentCategory] = useState(null);

  const onSelectCategory = (category) => {
    setCurrentCategory(category);
  };

  return (
    <div className="categories">
      <ul className="categories__list">
        <li className="categories__item">
          <button
            className={classNames(
              'categories__link',
              { active: !currentCategory },
            )}
            type="button"
            onClick={() => onSelectCategory(null)}
          >
            All
          </button>
        </li>

        {categories
          && categories.map((category) => (
            <li className="categories__item" key={category}>
              <button
                className={classNames(
                  'categories__link',
                  { active: currentCategory === category },
                )}
                type="button"
                onClick={() => onSelectCategory(category)}
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
