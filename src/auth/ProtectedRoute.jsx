import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function ProtectedRoute({ allowRole }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    // redirect to role-specific login if role known, else landing
    return <Navigate to={`/${allowRole || ''}/login`.replace('//', '/')} replace state={{ from: location }} />;
  }
  if (allowRole && user.role !== allowRole) {
    return <Navigate to={`/${allowRole}/login`} replace />;
  }
  return <Outlet />;
}
