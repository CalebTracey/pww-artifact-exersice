import React from 'react';

const HeaderText = () => (
  <div className="header-text-wrapper">
    <span className="header-text">
      South Carolina <br /> Revenue and Fiscal Affairs Office <br />
    </span>
    <span
      style={{
        whiteSpace: 'nowrap',
        fontSize: '1vw',
        fontFamily: 'OpenSans',
        fontStyle: 'italic',
      }}
    >
      <small>Transforming data into solutions for South Carolina</small>
    </span>
  </div>
);

export default HeaderText;
