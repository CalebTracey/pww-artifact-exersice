/* eslint-disable react/prop-types */
import React from 'react';
import RecentUpdateBadge from './RecentUpdateBadge';

const RecentUpdateDate = ({ date, badge }) => (
  <>
    <p
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '80%',
        fontSize: '.85rem',
      }}
      className="content-list-text"
    >
      <span style={{ fontWeight: 'bold', marginRight: '.25rem' }}>
        Published:
      </span>
      {new Date(date).toDateString()}
      <RecentUpdateBadge badge={badge} />
    </p>
  </>
);

export default RecentUpdateDate;
