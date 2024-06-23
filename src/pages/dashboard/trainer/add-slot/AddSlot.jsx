import { Button } from '@/components/ui/button';
import useAuth from '@/hooks/useAuth';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import Select from 'react-select';

const AddSlot = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedDay, setSelectedDay] = useState([]);

  const { data: trainer = {} } = useQuery({
    queryKey: ['trainer', user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/trainer/${user?.email}`);
      return data;
    },
  });
  const { data: classes = [] } = useQuery({
    queryKey: ['classes'],
    enabled: !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/classes`);
      return data;
    },
  });

  const selected = trainer.availableDays?.map((v) => {
    return { value: v, label: v };
  });

  const options = classes.map((item) => {
    return { value: item.title, label: item.title };
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const mainFormData = Object.fromEntries(formData.entries());
    const selectedValues = selectedOptions.map((option) => option.value);
    mainFormData.classNames = selectedValues;
    console.log(mainFormData);
    const res = await axiosSecure.put(`/availableSlotDetails/${trainer?._id}`, mainFormData);
    if (res.data?.modifiedCount > 0) {
      toast.success('Slot added successfully!');
      form.reset();
    }
  };
  return (
    <div>
      <div className="container mx-auto">
        <Helmet>
          <title>Add Slot</title>
        </Helmet>
        <div className="flex justify-center items-center min-h-[calc(100vh-360px)] py-32 px-6">
          <section className="p-2 md:p-6 w-full mx-auto bg-white rounded-md shadow-lg ">
            <h2 className="text-4xl mb-4 font-semibold text-gray-700 capitalize ">Add Slot</h2>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                  <div>
                    <label className="text-gray-700 font-medium" htmlFor="trainerName">
                      Name
                    </label>
                    <input
                      id="trainerName"
                      name="trainerName"
                      type="text"
                      defaultValue={trainer?.trainerName}
                      required
                      readOnly
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-slate-400 focus:ring-slate-300 focus:ring-opacity-40 focus:outline-none focus:ring"
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
                      readOnly
                      // disabled
                      defaultValue={trainer?.age}
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
                      defaultValue={trainer?.email}
                      readOnly
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-slate-400 focus:ring-slate-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    />
                  </div>

                  <div>
                    <label className="text-gray-700 font-medium" htmlFor="day">
                      Select Day
                    </label>
                    <Select isMulti="false" id="day" name="day" options={selected} />
                  </div>

                  <div>
                    <label className="text-gray-700 font-medium" htmlFor="slotName">
                      Slot Name
                    </label>
                    <input
                      id="slotName"
                      type="text"
                      name="slotName"
                      placeholder="eg: Morning Slot"
                      required
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-slate-400 focus:ring-slate-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 font-medium" htmlFor="slotTime">
                      Slot Time
                    </label>
                    <input
                      id="slotTime"
                      type="text"
                      name="time-duration"
                      placeholder="eg: 10am - 11am"
                      required
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-slate-400 focus:ring-slate-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <div>
                    <label className="text-gray-700 font-medium" htmlFor="availableDays">
                      Classes
                    </label>
                    <Select onChange={(e) => setSelectedOptions(e)} isMulti="true" id="classes" options={options} />
                  </div>
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

export default AddSlot;
