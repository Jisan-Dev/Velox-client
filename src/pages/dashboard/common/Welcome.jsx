import useAuth from '@/hooks/useAuth';
import logo from '../../../assets/images/logovelox.png';
import { Helmet } from 'react-helmet-async';

const Welcome = () => {
  const { user } = useAuth();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Helmet>
        <title>Velox | Dashboard</title>
      </Helmet>
      <img src={logo} className="w-80 object-cover mb-2" alt="" />
      <h1 className="font-bold text-6xl text-stone-900 text-center leading">
        Welcoming {user?.displayName ?? ''} <br /> To Velox Dashboard
      </h1>
    </div>
  );
};

export default Welcome;
