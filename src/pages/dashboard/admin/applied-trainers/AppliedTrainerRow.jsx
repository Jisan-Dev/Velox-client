import { FaEye } from 'react-icons/fa';

const AppliedTrainerRow = ({ user }) => {
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap capitalize">{user?.name}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{user?.email}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {user?.status ? <p className="whitespace-no-wrap text-yellow-500 font-medium">{user?.status}</p> : <p className="text-red-500 whitespace-no-wrap">N/A</p>}
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <FaEye className="w-5 h-5 ml-3" />
        </button>
      </td>
    </tr>
  );
};

export default AppliedTrainerRow;
