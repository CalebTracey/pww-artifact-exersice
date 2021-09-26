import React from 'react';
import HeroImage from './HeroImage';
import Footer from './Footer';
import CalendarOfEvents from './CalendarOfEvents';
import ServicesAndLinks from './ServicesAndLinks';
import InformationAndLinks from './InformationAndLinks';
import RecentUpdates from './RecentUpdates';
// import ScrollToTop from '../components/ScrollToTop';
import ScrollToTopContainer from './ScrollToTopContainer';

const Content = () => (
  <div className="content">
    <HeroImage />
    <InformationAndLinks />
    <ServicesAndLinks />
    <div className="content-inner">
      <RecentUpdates />
      <CalendarOfEvents />
    </div>
    <ScrollToTopContainer />
    <Footer />
  </div>
);

export default Content;
