import useAxiosSecure from '@/hooks/useAxiosSecure';
import React from 'react';
import toast from 'react-hot-toast';
import { MdDelete } from 'react-icons/md';

const TrainerRow = ({ trainer, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const handleDelete = async () => {
    const { data } = await axiosSecure.delete(`/trainers/${trainer?.email}`);
    if (data?.deletedCount > 0) {
      toast.success('Trainer deleted successfully!');
      refetch();
    }
  };
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap capitalize">{trainer?.trainerName || trainer?.name}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{trainer?.email}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {trainer?.status ? <p className="whitespace-no-wrap text-yellow-500 font-medium">{trainer?.status}</p> : <p className="text-red-500 whitespace-no-wrap">N/A</p>}
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button onClick={handleDelete} className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-red-500 leading-tight">
          <MdDelete className="w-5 h-5 ml-3" />
        </button>
      </td>
    </tr>
  );
};

export default TrainerRow;
