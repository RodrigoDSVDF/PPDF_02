import React from 'react';
import HeroSection from '../ui/HeroSection';
import AnimatedBanner from '../ui/AnimatedBanner';
import CounterStats from '../ui/CounterStats';
import ImageGallery from '../ui/ImageGallery';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AnimatedBanner />
      <CounterStats />
      <ImageGallery />
    </div>
  );
};

export default HomePage;

