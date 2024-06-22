import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import useAuth from '@/hooks/useAuth';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import { FaEye } from 'react-icons/fa';

function UpdateRoleModal({ refetch, trainerRefetch, user }) {
  const axiosSecure = useAxiosSecure();

  const confirmHandler = async () => {
    const { data } = await axiosSecure.put(`/users/${user?.email}`, {
      role: 'trainer',
      status: 'Accepted',
    });
    console.log(data);
    if (data.modifiedCount > 0) {
      toast.success('Successfully changed role!');
      refetch();
      trainerRefetch();
    }
  };
  const deleteHandler = async () => {
    const { data } = await axiosSecure.put(`/users/reject/${user?.email}`, {
      status: 'Rejected',
    });
    console.log(data);
    if (data.modifiedCount > 0) {
      toast.success('Successfully Rejected!');
      refetch();
      trainerRefetch();
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <button className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
            <FaEye className="w-5 h-5 ml-3" />
          </button>
        </td>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Role</DialogTitle>
          <DialogDescription>Make changes to your user roles here.</DialogDescription>
        </DialogHeader>
        <div>
          <DialogFooter>
            <DialogClose onClick={confirmHandler}>
              <Button>Confirm</Button>
            </DialogClose>
            <DialogClose onClick={deleteHandler}>
              <Button>Reject</Button>
            </DialogClose>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default UpdateRoleModal;
