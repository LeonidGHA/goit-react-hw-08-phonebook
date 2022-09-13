import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Notiflix from 'notiflix';

import { registration } from '../../redux/auth/auth-operations';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

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
    Notiflix.Notify.success('You have a new Contact');
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={onSubmitClick}>
      <label>
        <input
          type="text"
          name="name"
          value={name}
          required
          placeholder="Kurt Cobain"
          onChange={changeInput}
        />
      </label>

      <label>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email@examle.com"
          required
          onChange={changeInput}
        />
      </label>

      <label>
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          required
          minLength="7"
          onChange={changeInput}
        />
      </label>

      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
