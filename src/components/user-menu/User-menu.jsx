import { useDispatch, useSelector } from 'react-redux';

import css from './User-menu.module.scss';

import { logOut } from 'redux/auth/auth-operations';
import { userStore } from 'redux/auth/auth-selector';

function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(userStore);
  return (
    <div>
      <span className={css.userMenu_email}>{user.name}</span>
      <span className={css.userMenu_login}>{user.email}</span>
      <button
        type="button"
        onClick={() => dispatch(logOut())}
        className={css.userMenu_btn}
      >
        LogOut
      </button>
    </div>
  );
}
export default UserMenu;
