import React from 'react';
import InfoLinkItemList from '../components/info-links/InfoLinkItemList';
import dataAndResearchImage from '../images/Group.svg';

const items = [
  {
    id: 'il-1',
    title: 'Data & Research',
    image: dataAndResearchImage,
    alt: '<dr img>',
  },
  {
    id: 'il-2',
    title: 'Geography & Mapping',
    image: null,
    alt: '<gm img>',
  },
  {
    id: 'il-3',
    title: 'Programs & Services',
    image: null,
    alt: '<ps img>',
  },
  {
    id: 'il-4',
    title: 'Legislative Fiscal Impacts',
    image: null,
    alt: '<lfi img>',
  },
];

const InformationAndLinks = () => (
  <div className="info-link-container">
    <InfoLinkItemList items={items} />
  </div>
);

export default InformationAndLinks;
