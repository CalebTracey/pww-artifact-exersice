/* eslint-disable react/prop-types */
import React from 'react';
import FooterContactItem from './FooterContactItem';

const FooterContactDetails = ({ contactDetails }) => {
  const listNode = contactDetails.map((details) => (
    <FooterContactItem details={details} />
  ));
  return <div className="footer-section">{listNode}</div>;
};
export default FooterContactDetails;
