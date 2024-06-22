import useAxiosSecure from '@/hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import AppliedTrainerRow from './AppliedTrainerRow';

const AppliedTrainers = () => {
  const axiosSecure = useAxiosSecure();
  const { data = [], refetch: trainerRefetch } = useQuery({
    queryKey: ['applied-trainers'],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/applied-trainers`);
      return data;
    },
  });
  console.log(data);
  return (
    <div>
      <div className="container mx-auto px-4 sm:px-8">
        <Helmet>
          <title>Applied Trainers</title>
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
                      Role
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
                  {data.map((applicant) => (
                    <AppliedTrainerRow key={applicant?._id} user={applicant} trainerRefetch={trainerRefetch} />
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

export default AppliedTrainers;
