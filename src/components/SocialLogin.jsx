import React from 'react';
import { Button } from './ui/button';
import useAuth from '@/hooks/useAuth';
import toast from 'react-hot-toast';
import axiosPublic from '@/hooks/useAxiosPublic';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const { signInWithGoogle } = useAuth();

  const googleSignIn = async () => {
    try {
      const { user } = await signInWithGoogle();
      const userInfo = { name: user.displayName, email: user.email, photo: user.photoURL, role: 'member' };
      await axiosPublic.post('/users', userInfo);
      toast.success('logged in successfully', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          padding: '14px 20px',
        },
      });
      navigate(from, { replace: true });
    } catch (error) {
      console.log('from the social login', error);
      toast.error(error.code || error.message, {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          padding: '14px 20px',
        },
      });
    }
  };
  return (
    <Button onClick={googleSignIn} variant="outline" className="w-full">
      Continue with Google
    </Button>
  );
};

export default SocialLogin;
