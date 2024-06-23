import useAxiosSecure from '@/hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaDollarSign } from 'react-icons/fa';

const Balance = () => {
  const axiosSecure = useAxiosSecure();
  const { data: stats = {} } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const { data } = await axiosSecure.get('/admin-stats');
      return data;
    },
  });
  return (
    <div className="md:px-20">
      <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
        <div
          className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-orange-600 to-orange-400 text-white shadow-orange-500/40`}>
          <FaDollarSign className="w-6 h-6 text-white" />
        </div>
        <div className="p-4 text-right">
          <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Total Balance</p>
          <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">${stats?.revenue}</h4>
        </div>
      </div>
    </div>
  );
};

export default Balance;
