import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import useAuth from '@/hooks/useAuth';

export function ProfileModal() {
  const { user, updateUserProfile, setUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUserProfile(e.target.name.value, e.target.image.value);
    setUser({ ...user, photoURL: e.target.image.value, displayName: e.target.name.value });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-orange-500 px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-orange-600 block mb-1">Update Profile</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>Make changes to your profile here. Click save when you&#39;re done.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" name="name" defaultValue={user?.displayName} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="image" className="text-right">
                ImageUrl
              </Label>
              <Input id="image" name="image" defaultValue={user?.photoURL} className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
