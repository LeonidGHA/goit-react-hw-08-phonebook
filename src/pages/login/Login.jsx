import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { logIn } from '../../redux/auth/auth-operations';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

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

  return (
    <form onSubmit={onSubmitClick}>
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
          minLength="7"
          required
          onChange={changeInput}
        />
      </label>

      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
