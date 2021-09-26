/* eslint-disable react/prop-types */
import React from 'react';

const CalendarEventIcon = ({ date }) => {
  const eventDate = new Date(date);
  const month = eventDate.toLocaleString('en-us', { month: 'short' });
  const day = eventDate.getDate();

  return (
    <div className="calendar-event-icon">
      <span
        style={{
          letterSpacing: '1px',
          fontSize: '1rem',
          fontFamily: 'OpenSans',
        }}
      >
        {month}{' '}
      </span>
      <span style={{ fontSize: '1.25rem', fontFamily: 'OpenSansSemiBold' }}>
        {day}
      </span>
    </div>
  );
};

export default CalendarEventIcon;
