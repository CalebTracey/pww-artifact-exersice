/* eslint-disable react/prop-types */
import React from 'react';
import { IoTimeOutline } from 'react-icons/io5';

const CalendarEventTime = ({ time }) => (
  <div className="calender-item-wrapper">
    <IoTimeOutline className="calendar-icon" />
    <span
      style={{ textTransform: 'lowercase' }}
      className="content-list-text-non-active"
    >
      {time}
    </span>
  </div>
);

export default CalendarEventTime;
