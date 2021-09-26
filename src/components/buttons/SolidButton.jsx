/* eslint-disable react/prop-types */
import React from 'react';

const SolidButton = ({ text }) => (
  <div className="button-wrapper">
    <button
      style={{
        whiteSpace: 'nowrap',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        width: 'auto',
        color: 'white',
      }}
      className="solid-button"
      type="button"
    >
      <p className="button-text">{text}</p>
    </button>
  </div>
);

export default SolidButton;
