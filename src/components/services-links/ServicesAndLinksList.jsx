/* eslint-disable react/prop-types */
import React from 'react';
import LinkItem from '../LinkItem';

const ServicesAndLinksList = ({ data }) => {
  const listNode = data.map((item) => (
    <LinkItem key={item.id} text={item.text} width="30%" />
  ));
  return <div className="services-links-list">{listNode}</div>;
};
export default ServicesAndLinksList;
