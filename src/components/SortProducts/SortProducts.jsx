import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './SortProducts.scss';

export const SortProducts = ({ sortItems }) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const sortRef = useRef();
  const activeLabel = sortItems[activeItem].name;

  const toggleVisiblePopup = () => {
    setVisiblePopup(!'visiblePopup');
  };

  const handleOutsideClick = (e) => {
    if (!e.path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);

  const onSelectItem = (index) => {
    setActiveItem(index);
    setVisiblePopup(false);
  };

  return (
    <div className="sort" ref={sortRef}>
      <div className="sort__label">
        Sort by:
        <button
          className="sort__button"
          type="button"
          onClick={toggleVisiblePopup}
        >
          {activeLabel}
        </button>
      </div>
      {visiblePopup && (
        <div className="sort__popup">
          <ul className="sort__list">
            {sortItems.map((sortItem, index) => (
              <li className="sort__item" key={sortItem.type}>
                <button
                  className={classNames(
                    'sort__link',
                    { active: activeItem === index },
                  )}
                  type="button"
                  onClick={() => onSelectItem(index)}
                >
                  {sortItem.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

SortProducts.propTypes = {
  sortItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
