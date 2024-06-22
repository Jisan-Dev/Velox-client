import useAuth from '@/hooks/useAuth';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SlotDataRow from './SlotDataRow';
import axiosPublic from '@/hooks/useAxiosPublic';
import Spinner from '@/components/Spinner';

const ManageSlots = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data = {},
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ['trainer', user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/trainer/${user?.email}`);
      return data.availableSlotsDetails;
    },
  });
  console.log(data);
  {
    isLoading && <Spinner />;
  }
  return (
    <div>
      <div className="container mx-auto px-4 sm:px-8">
        <Helmet>
          <title>Manage Slots</title>
        </Helmet>
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-medium">
                      Slot Name
                    </th>
                    <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-medium">
                      Day
                    </th>
                    <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-medium">
                      Time
                    </th>
                    <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-medium">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>{data.length > 0 && data?.map((item) => <SlotDataRow key={item?._id} slot={item} refetch={refetch} />)}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageSlots;
