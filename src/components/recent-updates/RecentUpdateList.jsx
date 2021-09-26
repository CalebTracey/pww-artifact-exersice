/* eslint-disable react/prop-types */
import React from 'react';
import RecentUpdate from './RecentUpdate';

const RecentUpdateList = ({ updates }) => {
  const listNode = updates.map((update) => (
    <RecentUpdate key={update.id} update={update} />
  ));
  return <div className="recent-update-list">{listNode}</div>;
};

export default RecentUpdateList;
