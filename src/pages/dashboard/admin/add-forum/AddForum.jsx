import { Button } from '@/components/ui/button';
import useAuth from '@/hooks/useAuth';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import useRole from '@/hooks/useRole';
import React from 'react';
import toast from 'react-hot-toast';

const AddForum = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [role] = useRole();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const mainFormDat = Object.fromEntries(formData.entries());
    mainFormDat.createdAt = new Date();
    mainFormDat.upVotes = 0;
    mainFormDat.downVotes = 0;
    console.log(mainFormDat);
    const { data } = await axiosSecure.post('/forum', mainFormDat);
    if (data.insertedId) {
      toast.success('Forum added successfully');
      form.reset();
    }
  };
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex justify-center items-center min-h-[calc(100vh-360px)] py-16 px-6">
          <section className="p-2 md:p-6 w-full mx-auto bg-white rounded-md shadow-lg ">
            <h2 className="text-4xl mb-4 font-semibold text-gray-700 capitalize ">Add Forum</h2>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4">
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                  <div>
                    <label className="text-gray-700 font-medium" htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      name="authorName"
                      type="text"
                      defaultValue={user?.displayName}
                      required
                      readOnly
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-slate-400 focus:ring-slate-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                    />
                  </div>

                  <div>
                    <label className="text-gray-700 font-medium" htmlFor="role">
                      Role
                    </label>
                    <input
                      id="role"
                      type="text"
                      name="role"
                      defaultValue={role}
                      required
                      readOnly
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-slate-400 focus:ring-slate-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    />
                  </div>

                  <div>
                    <label className="text-gray-700 font-medium" htmlFor="title">
                      Title
                    </label>
                    <input
                      id="title"
                      type="title"
                      name="title"
                      required
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-slate-400 focus:ring-slate-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    />
                  </div>

                  <div>
                    <label className="text-gray-700 font-medium" htmlFor="shortDescription">
                      Short Description
                    </label>
                    <textarea
                      id="shortDescription"
                      type="text"
                      name="shortDescription"
                      required
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-slate-400 focus:ring-slate-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-gray-700 font-medium" htmlFor="longDescription">
                    Long Description
                  </label>
                  <textarea
                    id="longDescription"
                    type="text"
                    rows={7}
                    name="description"
                    required
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-slate-400 focus:ring-slate-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  />
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <Button size="lg" className="tracking-wide">
                  Add
                </Button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AddForum;
