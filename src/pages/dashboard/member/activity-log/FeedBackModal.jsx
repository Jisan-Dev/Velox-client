import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from '@/components/ui/dialog';
import { DialogTitle } from '@radix-ui/react-dialog';
import React from 'react';
import { FaEye } from 'react-icons/fa';

const FeedBackModal = ({ user }) => {
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
          <DialogTitle> {user?.rejectionMsg ?? 'Nothing to show'} </DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>
            <Button type="submit">Ok</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FeedBackModal;
