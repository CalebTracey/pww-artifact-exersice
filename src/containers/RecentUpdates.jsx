import React from 'react';
import faker from 'faker';
import RecentUpdateList from '../components/recent-updates/RecentUpdateList';
import GoldBarHeader from '../components/GoldBarHeader';
import SolidButton from '../components/buttons/SolidButton';

const updates = [
  {
    id: 'ru-1',
    link: 'Local Government Finance',
    text: faker.lorem.sentence(),
    date: faker.date.recent(),
    badge: 'Updated',
  },
  {
    id: 'ru-2',
    link: 'Transportation Network Carrier Maps',
    text: faker.lorem.sentence(),
    date: faker.date.recent(),
    badge: 'New',
  },
  {
    id: 'ru-3',
    link: 'BEA Long-Range General Fund Revenue Plan for FY 2019-20 to FY 2022-23',
    text: faker.lorem.sentence(),
    date: faker.date.recent(),
    badge: 'Updated',
  },
  {
    id: 'ru-4',
    link: 'Budget Development',
    text: faker.lorem.sentence(),
    date: faker.date.recent(),
    badge: 'New',
  },
  {
    id: 'ru-5',
    link: 'November 2019 General Fund Revenue Digest',
    text: faker.lorem.sentence(),
    date: faker.date.recent(),
    badge: 'New',
  },
];

const RecentUpdates = () => (
  <div className="recent-updates">
    <GoldBarHeader text="Recent Updates" />
    <RecentUpdateList updates={updates} />
    <div className="button-container">
      <SolidButton text="View More" />
    </div>
  </div>
);

export default RecentUpdates;
