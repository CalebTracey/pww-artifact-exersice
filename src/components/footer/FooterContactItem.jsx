/* eslint-disable react/prop-types */
import React from 'react';

const FooterContactItem = ({ details }) => (
  // left side column with title and company logo
  <div className="footer-contact-item">
    <span
      style={{
        fontFamily: 'OpenSans',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        marginBottom: '.25em',
      }}
    >
      {details.title}
    </span>
    <span
      style={{
        color: '#f3f6f9',
        fontFamily: 'OpenSans',
        letterSpacing: '1px',
        marginBottom: '1em',
      }}
    >
      {details.text}
    </span>
  </div>
);

export default FooterContactItem;
