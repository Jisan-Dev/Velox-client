import SectionHeader from '@/components/SectionHeader';
import TrainerCard from '@/components/TrainerCard';
import axiosPublic from '@/hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllTrainers = () => {
  const { data: trainers } = useQuery({
    queryKey: ['trainers'],
    queryFn: async () => {
      const { data } = await axiosPublic.get('/trainers');
      return data;
    },
  });

  return (
    <div className="py-20">
      <SectionHeader heading="All Trainers" subHeading="We provide you experienced and expert trainers to help you achieve your health goals and lifestyle" />

      <section className="bg-white">
        <div className="px-4 mx-auto max-w-screen-xl lg:px-6 ">
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            {trainers?.map((trainer) => (
              <TrainerCard key={trainer._id} trainer={trainer} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllTrainers;
