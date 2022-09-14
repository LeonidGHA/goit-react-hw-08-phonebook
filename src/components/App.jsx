import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import SharedLayout from 'components/sharedLayout/SharedLayout';
import Home from '../pages/home/Home';
import Login from 'pages/login/Login';
import Register from 'pages/register/Register';
import Contacts from 'pages/contacts/Contacts';

import { takeCurrentUser } from 'redux/auth/auth-operations';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(takeCurrentUser());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="Contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};
