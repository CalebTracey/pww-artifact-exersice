import React from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import SolidButtonIcon from '../buttons/SolidButtonIcon';

const HeroImageSearchBar = () => (
  <div className="search-bar-form-wrapper">
    <input
      style={{ fontSize: '1rem' }}
      className="search-bar-form"
      placeholder="Search rfa.sc.gov"
      title="Search"
      type="text"
      name="search"
      id="search"
    />
    <SolidButtonIcon
      backgroundColor="#0074c1"
      color="white"
      title="Search"
      icon={<IoSearchSharp className="button-icon" />}
    />
  </div>
);
export default HeroImageSearchBar;
