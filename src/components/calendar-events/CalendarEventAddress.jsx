/* eslint-disable react/prop-types */
import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';

const CalendarEventAddress = ({ address }) => (
  <div className="calender-item-wrapper">
    <IoLocationOutline className="calendar-icon" />
    <span className="content-list-text">{address}</span>
  </div>
);

export default CalendarEventAddress;
