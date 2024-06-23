import TrainerCard from '@/components/TrainerCard';
import useAuth from '@/hooks/useAuth';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const BookedTrainers = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data = [] } = useQuery({
    queryKey: ['booked-trainers'],
    enabled: !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/booked-trainers/${user?.email}`);
      return data;
    },
  });
  return (
    <div className="grid md:grid-cols-2 gap-5">
      <Helmet>
        <title>Booked Trainers</title>
      </Helmet>
      {data.map((item) => (
        <TrainerCard key={item._id} trainer={item} />
      ))}
    </div>
  );
};

export default BookedTrainers;
