import axiosPublic from '@/hooks/useAxiosPublic';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Subscribers = () => {
  const axiosSecure = useAxiosSecure();
  const { data } = useQuery({
    queryKey: ['subscribers'],
    queryFn: async () => {
      const { data } = await axiosSecure.get('/subscribers');
      return data;
    },
  });
  return (
    <div>
      <div className="container mx-auto px-4 sm:px-8">
        <Helmet>
          <title>Subscribers</title>
        </Helmet>
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-medium">
                      Email
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((email) => (
                    <td key={email._id} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap capitalize">{email?.email}</p>
                    </td>
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

export default Subscribers;
