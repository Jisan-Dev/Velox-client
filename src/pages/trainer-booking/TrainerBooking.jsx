import SectionHeader from '@/components/SectionHeader';
import useAuth from '@/hooks/useAuth';
import axiosPublic from '@/hooks/useAxiosPublic';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const TrainerBooking = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [selectedSlot, setSelectedSlot] = useState({});
  const { data } = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    const slot = data.availableSlotsDetails.filter((obj) => obj._id === id);
    setSelectedSlot(slot[0]);
  }, [data, id]);

  const addToCart = async (plan, price) => {
    if (user) {
      const cartItem = {
        trainerName: data?.trainerName,
        selectedSlot: selectedSlot?.slotName + ',' + selectedSlot?.day + ',' + selectedSlot['time-duration'],
        package: plan,
        price: price,
        classes: selectedSlot.classNames,
        user: {
          name: user?.displayName,
          email: user?.email,
        },
      };
      try {
        await axiosPublic.post('/addToCart', cartItem);
        navigate('/payment');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <section className="py-20 container mx-auto lg:px-20">
      <SectionHeader heading={'Train Smarter, Not Harder'} subHeading={' Book personalized training sessions with our certified trainers and unlock your fitness potential.'} />
      <p className="text-2xl mt-2">
        <span className="text-gray-600 text-lg font-semibold">Trainer&apos;s Name :</span> <span className="font-semibold text-gray-700">{data?.trainerName}</span>
      </p>
      <p className="text-2xl mt-2">
        <span className="text-gray-600 text-lg font-semibold">Selected Slot :</span>
        <span className="font-semibold text-gray-700">
          {' '}
          {selectedSlot?.slotName}, {selectedSlot?.day}, {selectedSlot['time-duration']}
        </span>
      </p>
      <p className="text-2xl mt-2">
        <span className="text-gray-600 text-lg font-semibold">Classes :</span>{' '}
        <span className="font-semibold text-gray-700">
          {selectedSlot?.classNames?.map((name, i) => (
            <span key={i} className="font-semibold text-gray-700">
              {name}
              {selectedSlot.classNames.length - 1 !== i && ','}
            </span>
          ))}
        </span>
      </p>

      <h3 className="text-4xl text-center mt-16 font-semibold text-gray-800">Choose a membership plan from below</h3>

      {/* pricing */}
      <div className="mx-auto  px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:items-center md:gap-8">
          {/* 1 box */}
          <div className="rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
            <div className="text-center">
              <h2 className="text-lg font-medium text-gray-900">
                Basic Membership
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 10$ </strong>

                {/* <span className="text-sm font-medium text-gray-700">/month</span> */}
              </p>
            </div>

            <ul className="mt-6 space-y-2">
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="min-w-5 min-h-5 max-w-5 max-h-5 text-orange-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>

                <span className="text-gray-700"> Access to gym facilities during regular operating hours. </span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="min-w-5 min-h-5 max-w-5 max-h-5 text-orange-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>

                <span className="text-gray-700"> Use of cardio and strength training equipment. </span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="min-w-5 min-h-5 max-w-5 max-h-5 text-orange-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>

                <span className="text-gray-700"> Access to locker rooms and showers. </span>
              </li>
            </ul>

            <button
              onClick={() => addToCart('Basic Membership', 10)}
              className="mt-8 block rounded-full border border-orange-600 bg-white px-12 py-3 text-center text-sm font-medium text-orange-600 hover:ring-1 hover:ring-orange-600 focus:outline-none focus:ring active:text-orange-500 w-full">
              Get Started
            </button>
          </div>

          {/* 2 box */}
          <div className="rounded-2xl border border-orange-600 p-6 shadow-sm ring-1 ring-orange-600 sm:px-8 lg:p-12">
            <div className="text-center">
              <h2 className="text-lg font-medium text-gray-900">
                Standard Membership
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 50$ </strong>

                {/* <span className="text-sm font-medium text-gray-700">/month</span> */}
              </p>
            </div>

            <ul className="mt-6 space-y-2">
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="min-w-5 min-h-5 max-w-5 max-h-5 text-orange-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>

                <span className="text-gray-700"> All benefits of the basic membership.</span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="min-w-5 min-h-5 max-w-5 max-h-5 text-orange-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>

                <span className="text-gray-700"> Access to group fitness classes such as yoga, spinning, and Zumba.</span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="min-w-5 min-h-5 max-w-5 max-h-5 text-orange-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>

                <span className="text-gray-700"> Use of additional amenities like a sauna or steam room. </span>
              </li>
            </ul>

            <button
              onClick={() => addToCart('Standard Membership', 50)}
              className="mt-8 block rounded-full border border-orange-600 bg-orange-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-orange-700 hover:ring-1 hover:ring-orange-700 focus:outline-none focus:ring active:text-orange-500 w-full">
              Get Started
            </button>
          </div>

          {/* 3 box */}
          <div className="rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
            <div className="text-center">
              <h2 className="text-lg font-medium text-gray-900">
                Premium Membership
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 100$ </strong>

                {/* <span className="text-sm font-medium text-gray-700">/month</span> */}
              </p>
            </div>

            <ul className="mt-6 space-y-2">
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="min-w-5 min-h-5 max-w-5 max-h-5 text-orange-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>

                <span className="text-gray-700"> All benefits of the standard membership. </span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="min-w-5 min-h-5 max-w-5 max-h-5 text-orange-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>

                <span className="text-gray-700"> Access to personal training sessions with certified trainers. </span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="min-w-5 min-h-5 max-w-5 max-h-5 text-orange-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>

                <span className="text-gray-700"> Discounts on additional services such as massage therapy or nutrition counseling.</span>
              </li>
            </ul>

            <button
              onClick={() => addToCart('Premium Membership', 100)}
              className="mt-8 block rounded-full border border-orange-600 bg-white px-12 py-3 text-center text-sm font-medium text-orange-600 hover:ring-1 hover:ring-orange-600 focus:outline-none focus:ring active:text-orange-500 w-full">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainerBooking;
