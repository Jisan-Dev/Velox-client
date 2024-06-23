import { Button } from '@/components/ui/button';
import useAuth from '@/hooks/useAuth';
import axiosPublic from '@/hooks/useAxiosPublic';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ price, selectedSlot, classes, trainerId }) => {
  const { user } = useAuth();
  const [error, setError] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  useEffect(() => {
    if (price > 0) {
      axiosPublic.post('/create-payment-intent', { price: price }).then((res) => {
        console.log(res.data);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setError(error.message);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setError('');
    }

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'anonymous',
          name: user?.name || 'anonymous',
        },
      },
    });
    if (confirmError) {
      console.log('confirmError ', confirmError);
    } else {
      console.log('paymentIntent ', paymentIntent.id);
      setTransactionId(paymentIntent.id);

      // now save the payment in db
      const payment = {
        user: user?._id,
        email: user?.email,
        transactionId: paymentIntent.id,
        bookedTrainerId: trainerId,
        date: new Date(),
        classes: classes,
        amount: price,
        selectedSlot,
      };

      const { data } = await axiosPublic.post(`/payment/${user?.email}`, payment);
      console.log(data);
      if (data?.paymentResult?.insertedId) {
        toast.success('payment successful');
        navigate('/dashboard/booked-trainers');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        className="border border-gray-400 focus:outline-none py-4 px-4 rounded-xl"
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      {error && <p className="text-red-500">{error}</p>}
      <Button type="submit" disabled={!stripe || !clientSecret} className="my-8 w-full uppercase">
        Pay Now
      </Button>
      {transactionId && (
        <p className="text-green-500">
          Payment confirmed. Your transaction id is : <strong> {transactionId} </strong>
        </p>
      )}
    </form>
  );
};

export default CheckoutForm;
