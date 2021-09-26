import React from 'react';
import faker from 'faker';
import FooterContactDetails from '../components/footer/FooterContactDetails';
import FooterInfo from '../components/footer/FooterInfo';
import FooterLinks from '../components/footer/FooterLinks';

const links = [
  { id: faker.datatype.uuid(), title: 'Privacy Statement' },
  { id: faker.datatype.uuid(), title: 'FOIA' },
  { id: faker.datatype.uuid(), title: 'Disclosures and Reporting' },
  { id: faker.datatype.uuid(), title: 'Report Fraud' },
  { id: faker.datatype.uuid(), title: 'Accessibility' },
  { id: faker.datatype.uuid(), title: 'Contact Us' },
];

const contactDetails = [
  {
    id: faker.datatype.uuid(),
    title: 'Main Office',
    text: faker.address.streetAddress(),
  },
  {
    id: faker.datatype.uuid(),
    title: 'Geodetic Survey Section',
    text: faker.address.streetAddress(),
  },
  {
    id: faker.datatype.uuid(),
    title: 'Health and Demographics Division',
    text: faker.address.streetAddress(),
  },
];

const Footer = () => (
  <div className="footer">
    <FooterInfo />
    <FooterLinks links={links} />
    <FooterContactDetails contactDetails={contactDetails} />
  </div>
);

export default Footer;
