/* eslint-disable react/prop-types */
import React from 'react';
import LinkItem from '../LinkItem';
import RecentUpdateDate from './RecentUpdateDate';
import RecentUpdateText from './RecentUpdateText';

const RecentUpdate = ({ update }) => {
  const { link, text, date, badge } = update;
  return (
    <div className="recent-update">
      <LinkItem width="80%" text={link} />
      <RecentUpdateText text={text} />
      <RecentUpdateDate date={date} badge={badge} />
    </div>
  );
};

export default RecentUpdate;
