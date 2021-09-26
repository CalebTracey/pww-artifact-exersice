import React from 'react';
import HeroImageText from '../components/hero-image/HeroImageText';
import HeroImageSearchBar from '../components/hero-image/HeroImageSearchBar';

const HeroImage = () => (
  <div className="hero-image">
    <HeroImageText />
    <HeroImageSearchBar />
  </div>
);

export default HeroImage;
