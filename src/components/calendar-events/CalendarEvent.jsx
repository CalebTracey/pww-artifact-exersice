/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import CalendarEventIcon from './CalendarEventIcon';
import CalendarEventTitle from './CalendarEventTitle';
import CalendarEventAddress from './CalendarEventAddress';
import CalendarEventTime from './CalendarEventTime';
import CalendarEventPhone from './CalendarEventPhone';
import CalendarEventStatusBadge from './CalendarEventStatusBadge';

const CalendarEvent = ({ event }) => {
  const { date, status, title, address, time, phone } = event;
  const [hasStatus, setHasStatus] = useState(false);

  // check if event has a status different than 'default'.
  // if so, show a badge.
  useEffect(() => {
    if (status !== 'default') {
      setHasStatus(true);
    }
  }, [status]);

  return (
    <div className="calendar-event">
      <CalendarEventIcon date={date} />
      <div className="calendar-event-content">
        {hasStatus && <CalendarEventStatusBadge status={status} />}
        <CalendarEventTitle title={title} />
        <CalendarEventAddress address={address} />
        <CalendarEventTime time={time} />
        <CalendarEventPhone phone={phone} />
      </div>
    </div>
  );
};
export default CalendarEvent;
