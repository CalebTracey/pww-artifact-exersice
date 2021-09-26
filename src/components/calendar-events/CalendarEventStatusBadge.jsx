/* eslint-disable react/prop-types */
import React from 'react';

const CalendarEventStatusBadge = ({ status }) =>
  // return different color badges depending on the current status
  status === 'updated' ? (
    <span
      style={{ marginLeft: '0', backgroundColor: '#d2b859' }}
      className="date-badge"
    >
      {status}
    </span>
  ) : (
    <span
      style={{ marginLeft: '0', backgroundColor: '#e9261d' }}
      className="date-badge"
    >
      {status}
    </span>
  );

export default CalendarEventStatusBadge;
