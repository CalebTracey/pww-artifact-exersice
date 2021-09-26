/* eslint-disable react/prop-types */
import React from 'react';

const LinkItem = ({ text, width }) => (
  <div style={{ width: `${width}` }} className="link-item ">
    <p className="link-item-text">{text}</p>
  </div>
);

export default LinkItem;
