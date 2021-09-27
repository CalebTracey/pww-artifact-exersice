import React from 'react';
import StrokeButton from '../buttons/StrokeButton';

const HeaderSearchBar = () => (
  <div className="header-search-bar-wrapper">
    <div
      style={{
        position: 'absolute',
        right: '0',
        marginBottom: '0',
        height: '70%',
        width: '95%',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      className="search-bar-form-wrapper"
    >
      <input
        style={{ position: 'relative', left: '0', width: '65%' }}
        className="header-search-bar-form"
        placeholder="Enter search term"
        title="Search"
        type="text"
        name="search"
        id="search"
      />
      <div
        style={{
          width: '25%',
          height: '100%',
          position: 'relative',
          right: '1em',
        }}
        className="button-wrapper"
      >
        <StrokeButton backgroundColor="#0074c1" color="white" title="Search" />
      </div>
    </div>
  </div>
);

export default HeaderSearchBar;
