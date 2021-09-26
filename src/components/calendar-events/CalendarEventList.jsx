/* eslint-disable react/prop-types */
import React from 'react';
import CalendarEvent from './CalendarEvent';

const CalendarEventList = ({ events }) => {
  // map over the event objects.
  // if current is not the first in the list, add a divider on top.
  const listNode = events.map((event, idx) =>
    idx > 0 ? (
      <>
        <hr
          key={`ce-${event.id}`}
          style={{
            border: 'none',
            color: '#cccccc',
            backgroundColor: '#cccccc',
            margin: '2em 0 2em 5em',
            width: '100%',
            height: '.75px',
          }}
        />
        <CalendarEvent key={`first-${event.id}`} event={event} />
      </>
    ) : (
      <CalendarEvent key={event.id} event={event} />
    )
  );
  return <div className="calendar-event-list">{listNode}</div>;
};
export default CalendarEventList;
