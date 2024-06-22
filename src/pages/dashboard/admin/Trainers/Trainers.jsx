import axiosPublic from '@/hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import TrainerRow from './TrainerRow';

const Trainers = () => {
  const { data: trainers, refetch } = useQuery({
    queryKey: ['trainers'],
    queryFn: async () => {
      const { data } = await axiosPublic.get('/trainers');
      return data;
    },
  });
  return (
    <div>
      <div className="container mx-auto px-4 sm:px-8">
        <Helmet>
          <title>All Trainers</title>
        </Helmet>
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-medium">
                      Name
                    </th>
                    <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-medium">
                      Email
                    </th>
                    <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-medium">
                      Status
                    </th>
                    <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-medium">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {trainers?.map((trainer) => (
                    <TrainerRow key={trainer?._id} trainer={trainer} refetch={refetch} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trainers;
