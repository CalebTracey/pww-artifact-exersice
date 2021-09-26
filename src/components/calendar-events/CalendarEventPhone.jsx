/* eslint-disable react/prop-types */
import React from 'react';
import { IoIosContact } from 'react-icons/io';

const CalendarEventPhone = ({ phone }) => (
  <div className="calender-item-wrapper">
    <IoIosContact className="calendar-icon" />
    <span className="content-list-text">{phone}</span>
  </div>
);

export default CalendarEventPhone;
