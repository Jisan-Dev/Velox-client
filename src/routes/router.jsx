import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '@/pages/homepage/Home';
import Register from '@/pages/authentications/Register';
import Login from '@/pages/authentications/Login';
import AllClasses from '@/pages/all-classes/AllClasses';
import AllTrainers from '@/pages/all-trainers/AllTrainers';
import TrainerDetails from '@/pages/trainer-details/TrainerDetails';
import axiosPublic from '@/hooks/useAxiosPublic';
import TrainerBooking from '@/pages/trainer-booking/TrainerBooking';
import Payment from '@/pages/payment/Payment';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/all-classes',
        element: <AllClasses />,
      },
      {
        path: '/all-trainers',
        element: <AllTrainers />,
      },
      {
        path: '/payment',
        element: <Payment />,
      },
      {
        path: '/trainers/:id',
        element: <TrainerDetails />,
        loader: ({ params }) => axiosPublic.get(`/trainers/${params.id}`),
      },
      {
        path: '/trainer-booking/:id',
        element: (
          <PrivateRoute>
            <TrainerBooking />
          </PrivateRoute>
        ),
        loader: ({ params }) => axiosPublic.get(`/trainer-booking/${params.id}`),
      },
    ],
  },
]);

export default router;
