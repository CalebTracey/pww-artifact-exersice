import React from 'react';
import RFAFooterLogo from '../../images/RFAFooterLogo.png';

const FooterInfo = () => (
  <div
    style={{
      marginBottom: '1rem',
      fontFamily: 'OpenSansSemiBold',
      letterSpacing: '.5px',
    }}
    className="footer-section"
  >
    <span>South Carolina</span>
    <span>Revenue and Fiscal Affairs Office</span>
    <div className="icon-wrapper">
      <img
        style={{ aspectRatio: '1/1', width: '50%' }}
        src={RFAFooterLogo}
        alt="footer"
      />
    </div>
  </div>
);

export default FooterInfo;
