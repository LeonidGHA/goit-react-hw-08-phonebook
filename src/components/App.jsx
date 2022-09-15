import { Routes, Route } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SharedLayout from 'components/sharedLayout/SharedLayout';
import { takeCurrentUser } from 'redux/auth/auth-operations';
// import PrivateRoute from './private-routes/PrivateRoute';
// import PublicRoute from './public-route/PublicRoute';
import Loading from './loading/Loading';

const Home = lazy(() => import('pages/home/Home'));
const Login = lazy(() => import('pages/login/Login'));
const Register = lazy(() => import('pages/register/Register'));
const Contacts = lazy(() => import('pages/contacts/Contacts'));
const NotFound = lazy(() => import('./not-found/NotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(({ auth }) => auth.isLoading);

  useEffect(() => {
    dispatch(takeCurrentUser());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        {/* <Route element={<PublicRoute />}> */}
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        {/* </Route> */}
        {/* <Route element={<PrivateRoute />}> */}
        <Route path="Contacts" element={<Contacts />} />
        {/* </Route> */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
