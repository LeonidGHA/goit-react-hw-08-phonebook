import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoggedInStore } from 'redux/auth/auth-selector';

function PrivateRoute() {
  const isLogIn = useSelector(isLoggedInStore);
  if (!isLogIn) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}

export default PrivateRoute;
