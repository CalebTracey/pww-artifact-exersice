/* eslint-disable react/prop-types */
import React from 'react';

const NavMenuContentListHeader = ({ title }) => (
  <>
    <span
      style={{ color: '#1b3a61', letterSpacing: '1px' }}
      className="header-style-2"
    >
      {title}
    </span>
    <hr
      style={{
        marginLeft: 0,
        marginBottom: '1.65vh',
        width: '3.5vw',
        border: 'none',
        color: '#8c6910',
        backgroundColor: '#8c6910',
        height: '4px',
      }}
    />
  </>
);

export default NavMenuContentListHeader;
