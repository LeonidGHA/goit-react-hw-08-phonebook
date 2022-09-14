import { Outlet, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Suspense } from 'react';

import css from './SharedLayout.module.scss';

import Loading from 'components/loading/Loading';
import Container from '../container/container';
import UserMenu from 'components/user-menu/User-menu';
import AuthNav from 'components/auth-nav/AutnNav';
import { isLoggedInStore } from './../../redux/auth/auth-selector';

function SharedLayout() {
  const isLoggedIn = useSelector(isLoggedInStore);
  return (
    <Container>
      <header>
        <nav className={css.navigation}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${css.navigationLink} ${css.active}`
                : `${css.navigationLink}`
            }
            to="/"
          >
            Home
          </NavLink>
          {isLoggedIn && (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `${css.navigationLink} ${css.active}`
                  : `${css.navigationLink}`
              }
              to="/Contacts"
            >
              Contacts
            </NavLink>
          )}
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </nav>
      </header>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </Container>
  );
}

export default SharedLayout;
