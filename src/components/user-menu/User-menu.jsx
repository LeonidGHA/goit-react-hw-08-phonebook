import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/auth-operations';

function UserMenu() {
  const dispatch = useDispatch();
  return (
    <>
      <span>UserName</span>
      <button type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </button>
    </>
  );
}
export default UserMenu;
