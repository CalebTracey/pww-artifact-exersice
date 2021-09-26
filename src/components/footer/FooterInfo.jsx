import React from 'react';
import RFAFooterLogo from '../../images/RFAFooterLogo.png';

const FooterInfo = () => (
  <div
    style={{ fontFamily: 'OpenSansSemiBold', letterSpacing: '.5px' }}
    className="footer-section"
  >
    <span>South Carolina</span>
    <span>Revenue and Fiscal Affairs Office</span>
    <div className="footer-icon-wrapper">
      <img
        style={{ aspectRatio: '1/1', width: '50%' }}
        src={RFAFooterLogo}
        alt="footer"
      />
    </div>
  </div>
);

export default FooterInfo;
