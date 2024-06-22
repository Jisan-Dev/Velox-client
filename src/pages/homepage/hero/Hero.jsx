// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import './hero.css';
// import required modules
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <Swiper
      effect={'fade'}
      pagination={{ clickable: true }}
      // loop={true}
      modules={[Pagination, Autoplay, EffectFade]}
      autoplay={{ delay: 4500, disableOnInteraction: false }}
      className="mySwiper h-screen">
      <SwiperSlide>
        <div style={{ backgroundImage: "url('./src/assets/images/hero1.jpg')" }} className="h-screen bg-cover bg-center">
          <div className="bg-neutral-900/60 flex flex-col items-center justify-center z-50 h-full">
            <h2 className="text-[80px] max-sm:text-[50px] leading-none text-white text-center font-bold max-w-[900px]">
              <span className="text-orange-600">VELOX</span> <br /> Where Fitness Meets Progress
            </h2>
            <p className="text-center text-white text-2xl font-medium mt-6">Velox helps you unlock a healthier, happier you, one step at a time</p>
            <Button size="lg" className="mt-6 text-lg py-6">
              Explore Classes
            </Button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ backgroundImage: "url('./src/assets/images/hero2.jpg')" }} className="h-screen bg-cover">
          <div className="bg-neutral-900/60 flex flex-col items-center justify-center z-50 h-full">
            <h2 className="text-[80px] max-sm:text-[50px] leading-none text-white text-center font-bold max-w-[900px]">
              <span className="text-orange-600">VELOX</span> <br /> Where Fitness Meets Progress
            </h2>
            <p className="text-center text-white text-2xl font-medium mt-6">Velox helps you unlock a healthier, happier you, one step at a time</p>
            <Link to="/all-classes">
              <Button size="lg" className="mt-6 text-lg py-6">
                Explore Classes
              </Button>
            </Link>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
