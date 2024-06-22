import { Helmet } from 'react-helmet-async';
import useAuth from '@/hooks/useAuth';
import { ProfileModal } from '@/components/ProfileModal';
import useRole from '@/hooks/useRole';

const Profile = () => {
  const { user, loading } = useAuth() || {};
  const [role, isLoading] = useRole();

  console.log(user);
  // if (isLoading || loading) return <LoadingSpinner />;
  return (
    <div className="flex justify-center items-center h-screen">
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <div className="bg-white shadow-lg rounded-2xl w-3/5">
        <img alt="profile" src="https://wallpapercave.com/wp/1CQ4TK7.jpg" className="w-full mb-4 rounded-t-lg h-48 object-cover object-top" />
        <div className="flex flex-col items-center justify-center p-4 -mt-16">
          <a href="#" className="relative block">
            <img alt="profile" src={user?.photoURL} className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-white " />
          </a>

          <p className="p-2 capitalize px-4 text-xs text-white bg-orange-500 rounded-full">{role}</p>
          <p className="mt-2 text-xl font-medium text-gray-800 ">User Id: {user?.uid}</p>
          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 ">
              <p className="flex flex-col">
                Name
                <span className="font-bold text-black ">{user?.displayName}</span>
              </p>
              <p className="flex flex-col">
                Email
                <span className="font-bold text-black ">{user?.email}</span>
              </p>
              <p className="flex flex-col">
                Last logged in at
                <span className="font-bold text-black ">{new Date(user?.metadata?.lastSignInTime).toLocaleString()}</span>
              </p>

              <div>
                <ProfileModal />
                <button className="bg-orange-500 px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-orange-600">Change Password</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
