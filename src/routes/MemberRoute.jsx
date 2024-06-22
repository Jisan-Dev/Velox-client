import { Navigate } from 'react-router-dom';
import useRole from '@/hooks/useRole';
import Spinner from '@/components/Spinner';
const MemberRoute = ({ children }) => {
  const [role, refetch, isLoading] = useRole();

  if (isLoading) return <Spinner />;
  if (role === 'member') return children;
  return <Navigate to="/dashboard" />;
};

export default MemberRoute;
