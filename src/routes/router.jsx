import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '@/pages/homepage/Home';
import Register from '@/pages/homepage/authentications/Register';
import Login from '@/pages/homepage/authentications/Login';
import AllClasses from '@/pages/all-classes/AllClasses';

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
    ],
  },
]);

export default router;
