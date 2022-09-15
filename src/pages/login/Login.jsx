import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import css from './Login.module.scss';

import { logIn } from 'redux/auth/auth-operations';
import { isLoggedInStore } from 'redux/auth/auth-selector';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isLogIn = useSelector(isLoggedInStore);
  const changeInput = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const onSubmitClick = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };
  if (isLogIn) {
    return <Navigate to="/Contacts" />;
  }

  return (
    <form onSubmit={onSubmitClick} className={css.login_form}>
      <label className={css.login_label}>
        Email
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email@examle.com"
          required
          onChange={changeInput}
          className={css.login_input}
        />
      </label>
      <label className={css.login_label}>
        Password
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          minLength="7"
          required
          onChange={changeInput}
          className={css.login_input}
        />
      </label>

      <button className={css.login_btn} type="submit">
        Login
      </button>
    </form>
  );
}

export default Login;
