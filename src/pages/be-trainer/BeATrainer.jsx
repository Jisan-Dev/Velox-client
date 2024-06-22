import { Button } from '@/components/ui/button';
import useAuth from '@/hooks/useAuth';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';

const options = [
  { value: 'Sunday', label: 'Sunday' },
  { value: 'Monday', label: 'Monday' },
  { value: 'Tuesday', label: 'Tuesday' },
  { value: 'Wednesday', label: 'Wednesday' },
  { value: 'Thursday', label: 'Thursday' },
];

const BeATrainer = () => {
  const { user } = useAuth();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const mainFormDat = Object.fromEntries(formData.entries());
    const selectedValues = selectedOptions.map((option) => option.value);
    mainFormDat.availableDays = selectedValues;
    mainFormDat.skill = selectedSkills;
    mainFormDat.status = 'pending';
    console.log(mainFormDat);
    try {
      const { data } = await axiosSecure.post('/applied-trainer', mainFormDat);
      if (data.insertedId) {
        toast.success('Your request to be a trainer is now in process');
        form.reset();
        navigate('/dashboard/activity-log');
      }
    } catch (err) {
      toast.error('something went wrong!');
    }
  };
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex justify-center items-center min-h-[calc(100vh-360px)] py-32 px-6">
          <section className="p-2 md:p-6 w-full mx-auto bg-white rounded-md shadow-lg ">
            <h2 className="text-4xl mb-4 font-semibold text-gray-700 capitalize ">Be a Trainer</h2>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                  <div>
                    <label className="text-gray-700 font-medium" htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      defaultValue={user?.displayName}
                      required
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-slate-400 focus:ring-slate-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                    />
                  </div>

                  <div>
                    <label className="text-gray-700 font-medium" htmlFor="imageUrl">
                      Image URL
                    </label>
                    <input
                      id="imageUrl"
                      type="url"
                      name="imageUrl"
                      required
                      // disabled
                      defaultValue={user?.photoURL}
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-slate-400 focus:ring-slate-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    />
                  </div>

                  <div>
                    <label className="text-gray-700 font-medium" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      // disabled
                      defaultValue={user?.email}
                      readOnly
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-slate-400 focus:ring-slate-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    />
                  </div>

                  <div>
                    <label className="text-gray-700 font-medium" htmlFor="age">
                      Age
                    </label>
                    <input
                      id="age"
                      type="text"
                      name="age"
                      required
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-slate-400 focus:ring-slate-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    />
                  </div>

                  <div>
                    <label className="text-gray-700 font-medium" htmlFor="availableTimeADay">
                      Available time in a day
                    </label>
                    <input
                      id="availableTimeADay"
                      type="text"
                      name="availableTimeADay"
                      placeholder="eg: 2 hours"
                      required
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-slate-400 focus:ring-slate-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <div>
                    <label className="text-gray-700 font-medium" htmlFor="availableDays">
                      Available Days in a Week
                    </label>
                    <Select onChange={(e) => setSelectedOptions(e)} isMulti="true" id="availableDays" name="availableDays" options={options} />
                  </div>
                  <div className="text-gray-700 font-medium mt-5 mb-2" htmlFor="skills">
                    Skills
                  </div>
                  <div className="flex gap-6 flex-wrap">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="skill"
                        className="form-checkbox h-5 w-5 text-blue-600"
                        value={'Weight Loss'}
                        onChange={(e) => {
                          if (e.target.checked === true) {
                            setSelectedSkills([...selectedSkills, e.target.defaultValue]);
                          }
                        }}
                      />
                      <span className="ml-2">Weight Loss</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="skill"
                        className="form-checkbox h-5 w-5 text-blue-600"
                        value={'Strength Training'}
                        onChange={(e) => {
                          if (e.target.checked === true) {
                            setSelectedSkills([...selectedSkills, e.target.defaultValue]);
                          }
                        }}
                      />
                      <span className="ml-2">Strength Training</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="skill"
                        className="form-checkbox h-5 w-5 text-blue-600"
                        value={'Cardio'}
                        onChange={(e) => {
                          if (e.target.checked === true) {
                            setSelectedSkills([...selectedSkills, e.target.defaultValue]);
                          }
                        }}
                      />
                      <span className="ml-2">Cardio</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="skill"
                        className="form-checkbox h-5 w-5 text-blue-600"
                        value={'Endurance Training'}
                        onChange={(e) => {
                          if (e.target.checked === true) {
                            setSelectedSkills([...selectedSkills, e.target.defaultValue]);
                          }
                        }}
                      />
                      <span className="ml-2">Endurance Training</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="skill"
                        className="form-checkbox h-5 w-5 text-blue-600"
                        value={'Yoga'}
                        onChange={(e) => {
                          if (e.target.checked === true) {
                            setSelectedSkills([...selectedSkills, e.target.defaultValue]);
                          }
                        }}
                      />
                      <span className="ml-2">Yoga</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="skill"
                        className="form-checkbox h-5 w-5 text-blue-600"
                        value={'Mindfulness'}
                        onChange={(e) => {
                          if (e.target.checked === true) {
                            setSelectedSkills([...selectedSkills, e.target.defaultValue]);
                          }
                        }}
                      />
                      <span className="ml-2">Mindfulness</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="skill"
                        className="form-checkbox h-5 w-5 text-blue-600"
                        value={'Bodybuilding'}
                        onChange={(e) => {
                          if (e.target.checked === true) {
                            setSelectedSkills([...selectedSkills, e.target.defaultValue]);
                          }
                        }}
                      />
                      <span className="ml-2">Bodybuilding</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="skill"
                        className="form-checkbox h-5 w-5 text-blue-600"
                        value={'Muscle Gain'}
                        onChange={(e) => {
                          if (e.target.checked === true) {
                            setSelectedSkills([...selectedSkills, e.target.defaultValue]);
                          }
                        }}
                      />
                      <span className="ml-2">Muscle Gain</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="skill"
                        className="form-checkbox h-5 w-5 text-blue-600"
                        value={'HIIT'}
                        onChange={(e) => {
                          if (e.target.checked === true) {
                            setSelectedSkills([...selectedSkills, e.target.defaultValue]);
                          }
                        }}
                      />
                      <span className="ml-2">HIIT</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="skill"
                        className="form-checkbox h-5 w-5 text-blue-600"
                        value={'Functional Training'}
                        onChange={(e) => {
                          if (e.target.checked === true) {
                            setSelectedSkills([...selectedSkills, e.target.defaultValue]);
                          }
                        }}
                      />
                      <span className="ml-2">Functional Training</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <Button size="lg" className="tracking-wide">
                  Apply
                </Button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BeATrainer;
