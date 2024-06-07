import React from 'react';
import { Button } from './ui/button';
import useAuth from '@/hooks/useAuth';
import toast from 'react-hot-toast';

const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();
  const googleSignIn = async () => {
    try {
      const { user } = await signInWithGoogle();
      console.log('from the social login', user);
      toast.success('logged in successfully', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          padding: '14px 20px',
        },
      });
    } catch (error) {
      console.log('from the social login', error);
      toast.error(error.code, {
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
