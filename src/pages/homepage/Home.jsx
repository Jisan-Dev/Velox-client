import { Helmet } from 'react-helmet-async';
import Hero from './hero/Hero';
import FeaturedServices from './featured-services/FeaturedServices';
import AboutUs from './about-us/AboutUs';
import Newsletter from '@/components/Newsletter';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>VELOX | HOME</title>
      </Helmet>
      <Hero />
      <FeaturedServices />
      <AboutUs />
      <Newsletter />
    </div>
  );
};

export default Home;
