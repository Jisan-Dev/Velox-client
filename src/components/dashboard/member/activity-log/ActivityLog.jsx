import useAxiosSecure from '@/hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import UserDataRow from './UserDataRow';

const ActivityLog = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/users?status=${'Pending'}`);
      return data;
    },
  });
  return (
    <div>
      <div className="container mx-auto px-4 sm:px-8">
        <Helmet>
          <title>Manage Users</title>
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
                      Feedback
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <UserDataRow key={user?._id} user={user} />
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

export default ActivityLog;
