/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import PropTypes from 'prop-types';
import HeaderSearchBar from './HeaderSearchBar';

const HeaderSearchButton = ({ headerSearchToggle, headerSearchOpen }) => {
  const [buttonClassName, setButtonClassName] = useState(
    'header-search-button-icon'
  );

  // change the styling of the right hand side search button if open/closed
  useEffect(() => {
    if (headerSearchOpen) {
      setButtonClassName('header-search-button-icon-open');
    }
    if (!headerSearchOpen) {
      setButtonClassName('header-search-button-icon');
    }
  }, [headerSearchOpen]);

  return (
    <div className="header-search-button-wrapper">
      <button
        type="button"
        style={{ border: 'none', background: 'white', padding: '0' }}
        onClick={() => headerSearchToggle()}
      >
        <IoSearchSharp className={buttonClassName} />
      </button>
      {headerSearchOpen && <HeaderSearchBar />}
    </div>
  );
};

HeaderSearchButton.propTypes = {
  headerSearchOpen: PropTypes.bool.isRequired,
};

export default HeaderSearchButton;
