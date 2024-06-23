import { FaEye } from 'react-icons/fa';
import UpdateRoleModal from './UpdateRoleModal';
import useRole from '@/hooks/useRole';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import toast from 'react-hot-toast';

const AppliedTrainerRow = ({ user, trainerRefetch }) => {
  const [open, setOpen] = useState(false);
  const axiosSecure = useAxiosSecure();

  const { data: role = '', refetch } = useQuery({
    queryKey: ['role', user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/users/${user?.email}`);
      return data.role;
    },
  });

  const deleteHandler = async (e) => {
    e.preventDefault();
    const { data } = await axiosSecure.put(`/users/reject/${user?.email}`, {
      status: 'Rejected',
      rejectionMsg: e.target.rejectionMsg.value,
    });
    console.log(data);
    if (data.modifiedCount > 0) {
      toast.success('Successfully Rejected!');
      refetch();
      trainerRefetch();
    }
  };
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap capitalize">{user?.name || user?.trainerName}</p>
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
      <td>
        <div>
          {user?.status === 'pending' && <Button onClick={() => setOpen(true)}>Reject</Button>}
          <Dialog className="relative z-50" open={open} onClose={() => setOpen(false)}>
            <DialogBackdrop
              transition
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in select-none pointer-events-none"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <DialogPanel
                  transition
                  className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95">
                  <form onSubmit={deleteHandler} className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <p>Name: {user?.name || user?.trainerName}</p>
                    <p>Email: {user?.email}</p>
                    <textarea
                      name="rejectionMsg"
                      placeholder="Give feedback"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-slate-400 focus:ring-slate-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    />

                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                        onClick={() => setOpen(false)}>
                        Reject
                      </button>
                    </div>
                  </form>
                </DialogPanel>
              </div>
            </div>
          </Dialog>
        </div>
      </td>
    </tr>
  );
};

export default AppliedTrainerRow;
