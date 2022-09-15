import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoggedInStore } from 'redux/auth/auth-selector';

function PublicRoute() {
  const isLogIn = useSelector(isLoggedInStore);
  if (isLogIn) {
    return <Navigate to="Contacts" />;
  }
  return <Outlet />;
}

export default PublicRoute;
