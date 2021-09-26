/* eslint-disable react/prop-types */
import React from 'react';

const GoldBarHeader = ({ text }) => (
  <div className="gold-bar-header">
    <p
      style={{ fontSize: '1.5rem', marginBottom: '.75rem' }}
      className="header-style-2"
    >
      {text}
    </p>
    <hr
      style={{
        marginLeft: 0,
        marginBottom: '1.5rem',
        width: '2.75rem',
        border: 'none',
        color: '#8c6910',
        backgroundColor: '#8c6910',
        height: '.25rem',
      }}
    />
  </div>
);

export default GoldBarHeader;
