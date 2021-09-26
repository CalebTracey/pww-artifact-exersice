/* eslint-disable react/prop-types */
import React from 'react';

const SolidButtonIcon = ({ color, title, icon }) => (
  <div className="button-wrapper">
    <button
      style={{ color: `${color}` }}
      className="solid-button"
      type="button"
    >
      <p className="button-text">{title}</p>
      {icon}
    </button>
  </div>
);

export default SolidButtonIcon;
