import SectionHeader from '@/components/SectionHeader';
import React from 'react';

const FeaturedServices = () => {
  return (
    <section className="mt-20 sm:mt-28">
      <SectionHeader heading="Featured Services" subHeading="Discover the features designed to keep you motivated and on track" />
      <div id="services" className="section relative pb-8 md:pb-8 bg-white">
        <div className="container xl:max-w-6xl mx-auto px-4">
          {/* row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 -mx-4 text-center max-sm:px-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={``}
                data-wow-duration="1s"
                data-wow-delay={`${index * 0.1}s`}
                style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInUp' }}>
                {/* service block */}
                <div className="py-16 px-10 bg-orange-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 h-full rounded-lg">
                  <div className="inline-block text-gray-900 mb-4">
                    {/* icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className={service.iconClass} viewBox="0 0 16 16">
                      <path d={service.iconPath1}></path>
                      {service.iconPath2 && <path d={service.iconPath2}></path>}
                    </svg>
                  </div>
                  <h3 className="text-2xl leading-tight mb-2 font-semibold text-black ">{service.title}</h3>
                  <p className="text-neutral-800 text-lg">{service.description}</p>
                </div>
                {/* end service block */}
              </div>
            ))}
          </div>
          {/* end row */}
        </div>
      </div>
    </section>
  );
};

const services = [
  {
    iconClass: 'bi bi-search',
    iconPath1:
      'M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z',
    title: 'Detailed Workout Tracking',
    description: 'Track every activity, distance, duration, and even weightlifting sets.',
  },
  {
    iconClass: 'bi bi-chat-square-dots',
    iconPath1:
      'M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8A2 2 0 0 0 2 12h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z',
    iconPath2: 'M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z',
    title: 'Personalized Goal Setting',
    description: 'Set SMART goals and get recommendations based on your progress',
  },
  {
    iconClass: 'bi bi-badge-ad',
    iconPath1:
      'M3.7 11l.47-1.542h2.004L6.644 11h1.261L5.901 5.001H4.513L2.5 11h1.2zm1.503-4.852l.734 2.426H4.416l.734-2.426h.053zm4.759.128c-1.059 0-1.753.765-1.753 2.043v.695c0 1.279.685 2.043 1.74 2.043.677 0 1.222-.33 1.367-.804h.057V11h1.138V4.685h-1.16v2.36h-.053c-.18-.475-.68-.77-1.336-.77zm.387.923c.58 0 1.002.44 1.002 1.138v.602c0 .76-.396 1.2-.984 1.2-.598 0-.972-.449-.972-1.248v-.453c0-.795.37-1.24.954-1.24z',
    iconPath2: 'M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z',
    title: 'Advanced Performance Analysis',
    description: 'Dive deep with the charts, graphs, and insights into your workouts',
  },
];

export default FeaturedServices;
