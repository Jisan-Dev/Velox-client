import useAxiosSecure from '@/hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import { FaEye } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const SlotDataRow = ({ slot, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const handleDelete = async () => {
    console.log(slot._id);
    const res = await axiosSecure.delete(`/availableSlotDetails/${slot._id}`);
    if (res.data?.modifiedCount > 0) {
      toast.success('Slot deleted successfully!');
      refetch();
    }
  };
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap capitalize">{slot?.slotName}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{slot?.day}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap capitalize">{slot?.['time-duration']}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button onClick={handleDelete} className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-red-500 leading-tight">
          <MdDelete className="w-5 h-5 ml-3" />
        </button>
      </td>
    </tr>
  );
};

export default SlotDataRow;
