import { FaEye } from 'react-icons/fa';
import UpdateRoleModal from './UpdateRoleModal';
import useRole from '@/hooks/useRole';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '@/hooks/useAxiosSecure';

const AppliedTrainerRow = ({ user, trainerRefetch }) => {
  const axiosSecure = useAxiosSecure();
  const { data: role = '', refetch } = useQuery({
    queryKey: ['role', user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/users/${user?.email}`);
      return data.role;
    },
  });
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap capitalize">{user?.name}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{user?.email}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{role}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {user?.status ? <p className="whitespace-no-wrap text-yellow-500 font-medium">{user?.status}</p> : <p className="text-red-500 whitespace-no-wrap">N/A</p>}
      </td>

      <UpdateRoleModal refetch={refetch} trainerRefetch={trainerRefetch} user={user} />
    </tr>
  );
};

export default AppliedTrainerRow;
