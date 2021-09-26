import React from 'react';
import faker from 'faker';
import CalendarEventList from '../components/calendar-events/CalendarEventList';
import GoldBarHeader from '../components/GoldBarHeader';
import SolidButton from '../components/buttons/SolidButton';

const events = [
  {
    id: faker.datatype.uuid(),
    date: faker.date.soon(),
    status: 'updated',
    title: 'Board of Economic Advisors Meeting',
    address: faker.address.streetAddress(),
    time: '1:30 pm',
    phone: faker.phone.phoneNumberFormat(),
  },
  {
    id: faker.datatype.uuid(),
    date: faker.date.soon(),
    status: 'cancelled',
    title: 'Board of Economic Advisors Meeting',
    address: faker.address.streetAddress(),
    time: '1:30 pm',
    phone: faker.phone.phoneNumberFormat(),
  },
  {
    id: faker.datatype.uuid(),
    date: faker.date.soon(),
    status: 'default',
    title: 'Board of Economic Advisors Meeting',
    address: faker.address.streetAddress(),
    time: '1:30 pm',
    phone: faker.phone.phoneNumberFormat(),
  },
  {
    id: faker.datatype.uuid(),
    date: faker.date.soon(),
    status: 'default',
    title: 'Board of Economic Advisors Meeting',
    address: faker.address.streetAddress(),
    time: '1:30 pm',
    phone: faker.phone.phoneNumberFormat(),
  },
];

const CalendarOfEvents = () => (
  <div className="calendar-events">
    <GoldBarHeader text="Calendar of Events" />
    <CalendarEventList events={events} />
    <div className="button-container">
      <SolidButton text="View all Events" />
    </div>
  </div>
);

export default CalendarOfEvents;
