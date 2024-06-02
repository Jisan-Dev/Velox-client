import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from './hero/Hero';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>VELOX | HOME</title>
      </Helmet>
      <Hero />
    </div>
  );
};

export default Home;
