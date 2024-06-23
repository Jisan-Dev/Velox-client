import { Button } from '@/components/ui/button';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddNewClass = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const image = e.target.image.files[0];
    const description = e.target.description.value;
    const formData = new FormData();
    formData.append('image', image);

    try {
      // 1. Upload image and get image url
      const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`, formData);
      console.log(data.data.display_url);

      const classObj = { title, image: data.data.display_url, description };
      const { data: res } = await axiosSecure.post(`/add-class`, classObj);
      if (res.insertedId) {
        toast('class added successfully');
        navigate('/all-classes');
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <div>
      <div className="container mx-auto">
        <div className="flex justify-center items-center min-h-[calc(100vh-360px)] py-32 px-6">
          <section className="p-2 md:p-6 w-full mx-auto bg-white rounded-md shadow-lg ">
            <h2 className="text-4xl mb-4 font-semibold text-gray-700 capitalize ">Add new class</h2>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4">
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                  <div>
                    <label className="text-gray-700 font-medium" htmlFor="name">
                      title
                    </label>
                    <input
                      id="title"
                      name="title"
                      type="text"
                      required
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-slate-400 focus:ring-slate-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                    />
                  </div>

                  <div>
                    <label htmlFor="image" className="block mb-2 text-sm">
                      Select Image:
                    </label>
                    <input required type="file" id="image" name="image" accept="image/*" />
                  </div>
                </div>
                <div>
                  <span className="text-gray-700 font-medium " htmlFor="description">
                    Description
                  </span>
                  <textarea
                    id="description"
                    type="text"
                    name="description"
                    required
                    // disabled
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

export default AddNewClass;
