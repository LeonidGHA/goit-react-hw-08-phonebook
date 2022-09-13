import { Outlet, NavLink } from 'react-router-dom';
import Container from '../../components/container/container';
import UserMenu from 'components/user-menu/User-menu';
function SharedLayout() {
  return (
    <Container>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Contacts">Contacts</NavLink>
          <NavLink to="/Login">Login</NavLink>
          <NavLink to="/Register">Register</NavLink>
          <UserMenu />
        </nav>
      </header>

      <Outlet />
    </Container>
  );
}

export default SharedLayout;
