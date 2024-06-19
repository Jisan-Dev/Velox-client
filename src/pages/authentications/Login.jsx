import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import signUp from '@/assets/images/hero2.jpg';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import SocialLogin from '@/components/SocialLogin';
import useAuth from '@/hooks/useAuth';
import toast from 'react-hot-toast';

const schema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6)
    .refine((value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value), {
      message: 'Password must contain at least one uppercase letter and one lowercase letter and a number',
    }),
});

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const { signIn } = useAuth();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const submitHandler = async (data) => {
    try {
      await signIn(data.email, data.password);
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
      toast.error(error.code || error.message, {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          padding: '14px 20px',
        },
      });
    }
    reset();
  };

  return (
    <div>
      <div className="container mx-auto flex items-center justify-center font-gsans max-sm:px-3 max-sm:py-5 max-sm:flex-col overflow-x-hidden">
        <Card className="mx-auto max-w-lg sm:w-96">
          <CardHeader>
            <CardTitle className="text-2xl">Sign In</CardTitle>
            <CardDescription>Enter your email below to login to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(submitHandler)}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" {...register('email')} placeholder="m@example.com" required />
                  {errors.email && <div className="text-red-500 text-sm">{errors.email.message}</div>}
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <Link href="#" className="ml-auto inline-block text-sm underline">
                      Forgot your password?
                    </Link>
                  </div>
                  <Input id="password" type="password" {...register('password')} required />
                  {errors.password && <div className="text-red-500 text-sm">{errors.password.message}</div>}
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
                <SocialLogin />
              </div>
            </form>
            <div className="mt-4 text-center text-sm">
              Doesn&#39;t have an account?{' '}
              <Link to="/register" className="underline">
                Sign Up
              </Link>
            </div>
          </CardContent>
        </Card>

        <div data-aos="fade-left" data-aos-duration="1000" className=" w-1/2 max-sm:w-full">
          <img src={signUp} className="h-[800px] w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Login;
