import { NavLink } from 'react-router-dom';

function AuthNav() {
  return (
    <div>
      <NavLink to="/Login">Login</NavLink>
      <NavLink to="/Register">Register</NavLink>
    </div>
  );
}
export default AuthNav;
