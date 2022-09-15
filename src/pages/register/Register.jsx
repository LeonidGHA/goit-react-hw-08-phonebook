import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import css from './Register.module.scss';

import { registration } from '../../redux/auth/auth-operations';
import { isLoggedInStore } from 'redux/auth/auth-selector';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const isLogIn = useSelector(isLoggedInStore);

  const changeInput = ({ target: { name, value } }) => {
    console.log(value);
    switch (name) {
      case `name`:
        return setName(value);
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
    dispatch(registration({ name, email, password }));

    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  if (isLogIn) {
    return <Navigate to="Contacts" />;
  }

  return (
    <form onSubmit={onSubmitClick} className={css.register_form}>
      <label className={css.register_label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          required
          placeholder="Kurt Cobain"
          onChange={changeInput}
          className={css.register_input}
        />
      </label>

      <label className={css.register_label}>
        Email
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email@examle.com"
          required
          onChange={changeInput}
          className={css.register_input}
        />
      </label>

      <label className={css.register_label}>
        Password
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          required
          minLength="7"
          onChange={changeInput}
          className={css.register_input}
        />
      </label>

      <button type="submit" className={css.register_btn}>
        Register
      </button>
    </form>
  );
}

export default Register;
