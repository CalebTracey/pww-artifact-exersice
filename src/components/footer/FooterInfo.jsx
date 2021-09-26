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
    <div style={{ marginLeft: '0' }} className="icon-wrapper">
      <img
        style={{ paddingTop: '1.5rem', aspectRatio: '1/1', width: '50%' }}
        src={RFAFooterLogo}
        alt="footer"
      />
    </div>
  </div>
);

export default FooterInfo;
