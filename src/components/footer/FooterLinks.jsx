/* eslint-disable react/prop-types */
import React from 'react';
import FooterLinkItem from './FooterLinkItem';

const FooterLinks = ({ links }) => {
  const listNode = links.map((link) => (
    <FooterLinkItem key={link.id} title={link.title} />
  ));
  return (
    <div
      style={{ marginLeft: '7vw', marginRight: '7vw' }}
      className="footer-section"
    >
      {listNode}
    </div>
  );
};

export default FooterLinks;
