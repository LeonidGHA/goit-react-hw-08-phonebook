import { Outlet, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Container from '../container/container';
import UserMenu from 'components/user-menu/User-menu';
import AuthNav from 'components/auth-nav/AutnNav';
import { isLoggedInStore } from './../../redux/auth/auth-selector';

function SharedLayout() {
  const isLoggedIn = useSelector(isLoggedInStore);
  return (
    <Container>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          {isLoggedIn && <NavLink to="/Contacts">Contacts</NavLink>}
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </nav>
      </header>

      <Outlet />
    </Container>
  );
}

export default SharedLayout;
