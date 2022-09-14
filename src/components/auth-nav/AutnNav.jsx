import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.scss';

function AuthNav() {
  return (
    <div className={css.navigationBlock}>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? `${css.navigationLink} ${css.active}`
            : `${css.navigationLink}`
        }
        to="/Login"
      >
        Login
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? `${css.navigationLink} ${css.active}`
            : `${css.navigationLink}`
        }
        to="/Register"
      >
        Register
      </NavLink>
    </div>
  );
}
export default AuthNav;
