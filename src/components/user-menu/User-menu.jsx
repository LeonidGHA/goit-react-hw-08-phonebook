import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { userStore } from 'redux/auth/auth-selector';

function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(userStore);
  return (
    <div>
      {user.name} : {user.email}
      <button type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </button>
    </div>
  );
}
export default UserMenu;
