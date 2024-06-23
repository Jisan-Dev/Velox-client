import PropTypes from 'prop-types';
import { FaEye } from 'react-icons/fa';
import FeedBackModal from './FeedBackModal';

const UserDataRow = ({ user }) => {
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap capitalize">{user?.name}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{user?.email}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap capitalize">{user?.role}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {user?.status ? <p className="whitespace-no-wrap text-yellow-500 font-medium">{user.status}</p> : <p className="text-red-500 whitespace-no-wrap">N/A</p>}
      </td>

      {user.status === 'Rejected' && <FeedBackModal user={user} />}
    </tr>
  );
};

UserDataRow.propTypes = {
  user: PropTypes.object,
  refetch: PropTypes.func,
};

export default UserDataRow;
