import SectionHeader from '@/components/SectionHeader';
import useAuth from '@/hooks/useAuth';
import axiosPublic from '@/hooks/useAxiosPublic';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from '@tanstack/react-query';
import CheckoutForm from './CheckoutForm';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import { Helmet } from 'react-helmet-async';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data } = useQuery({
    queryKey: ['cart', user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/cart/${user.email}`);
      return data;
    },
  });
  return (
    <section className="pt-20 container mx-auto">
      <SectionHeader heading={'PAYMENT'} />
      <Helmet>
        <title>Velox | Payment</title>
      </Helmet>

      <div className="w-full max-w-5xl mx-auto p-8">
        <div className="bg-white rounded-lg shadow-lg p-6 pb-2">
          {/* <h2 className="text-lg font-medium mb-6"></h2> */}
          <div>
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="trainer-name" className="block text-sm font-medium text-gray-700 mb-2">
                  Trainer Name
                </label>
                <input
                  type="text"
                  name="trainer-name"
                  id="trainer-name"
                  defaultValue={data?.trainerName}
                  readOnly
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-orange-500"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="selected-slot" className="block text-sm font-medium text-gray-700 mb-2">
                  Selected Slot
                </label>
                <input
                  type="text"
                  name="selected-slot"
                  id="selected-slot"
                  defaultValue={data?.selectedSlot}
                  readOnly
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-orange-500"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="package" className="block text-sm font-medium text-gray-700 mb-2">
                  Package
                </label>
                <input
                  type="text"
                  name="package"
                  id="package"
                  defaultValue={data?.package}
                  readOnly
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-orange-500"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
                  Price
                </label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  defaultValue={data?.price}
                  readOnly
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-orange-500"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="client-name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="client-name"
                  id="client-name"
                  defaultValue={data?.user?.name}
                  readOnly
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-orange-500"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="client-email" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="text"
                  name="client-email"
                  id="client-email"
                  defaultValue={data?.user?.email}
                  readOnly
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>
            <div className="mt-6">
              <Elements stripe={stripePromise}>
                <CheckoutForm price={data?.price} selectedSlot={data?.selectedSlot} classes={data?.classes} trainerId={data?.trainerId} />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
