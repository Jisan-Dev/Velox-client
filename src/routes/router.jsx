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
import ErrorPage from '@/pages/ErrorPage';
import DashboardLayout from '@/layouts/DashboardLayout';
import ForumDetails from '@/pages/forum-details/ForumDetails';
import Profile from '@/pages/profile/Profile';
import BeATrainer from '@/pages/be-trainer/BeATrainer';
import ActivityLog from '@/pages/dashboard/member/activity-log/ActivityLog';
import BookedTrainers from '@/pages/dashboard/member/booked=trainers/BookedTrainers';
import ManageSlots from '@/pages/dashboard/trainer/manage-slots/ManageSlots';
import AddSlot from '@/pages/dashboard/trainer/add-slot/AddSlot';
import Subscribers from '@/pages/dashboard/admin/Subscribers';
import AppliedTrainers from '@/pages/dashboard/admin/applied-trainers/AppliedTrainers';
import AdminRoute from './AdminRoute';
import MemberRoute from './MemberRoute';
import Welcome from '@/pages/dashboard/common/Welcome';
import TrainerRoute from './TrainerRoute';
import Trainers from '@/pages/dashboard/admin/Trainers/Trainers';
import Community from '@/pages/community/Community';
import AddNewClass from '@/pages/dashboard/admin/add-class/AddNewClass';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
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
        path: '/profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: '/all-classes',
        element: <AllClasses />,
      },
      {
        path: '/community',
        element: <Community />,
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
        path: '/forum/:id',
        element: <ForumDetails />,
        // loader: ({ params }) => axiosPublic.get(`/forum/${params.id}`),
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
      {
        path: '/be-a-trainer',
        element: (
          <PrivateRoute>
            <BeATrainer />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Welcome />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/activity-log',
        element: (
          <PrivateRoute>
            <MemberRoute>
              <ActivityLog />
            </MemberRoute>
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/profile',
        element: <Profile />,
      },
      {
        path: '/dashboard/booked-trainers',
        element: (
          <PrivateRoute>
            <MemberRoute>
              <BookedTrainers />
            </MemberRoute>
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/manage-slots',
        element: (
          <PrivateRoute>
            <TrainerRoute>
              <ManageSlots />
            </TrainerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/add-slot',
        element: (
          <PrivateRoute>
            <TrainerRoute>
              <AddSlot />
            </TrainerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/subscribers',
        // index: true,
        element: (
          <PrivateRoute>
            <AdminRoute>
              <Subscribers />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/applied-trainers',
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AppliedTrainers />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/trainers',
        element: (
          <PrivateRoute>
            <AdminRoute>
              <Trainers />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/add-class',
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AddNewClass />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
