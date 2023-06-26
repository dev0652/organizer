import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { selectAuth, selectContacts } from 'redux/selectors';
import { Outlet } from 'react-router-dom';

import UserBar from 'components/UserBar';
import AuthNav from 'components/AuthNav';

import Toast from 'components/Toast';

import { Loading } from 'notiflix/build/notiflix-loading-aio';
import loaderOptions from 'services/loaderOptions';

import { StyledNavLink } from 'styling/links';
import { AppBar, AppBarWrapper, Container } from './SharedLayout.styled';

// ##############################

export default function SharedLayout() {
  const { isLoading } = useSelector(selectContacts);
  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <>
      <AppBar className="header">
        <Container>
          <AppBarWrapper>
            <nav>
              <StyledNavLink to="/">Home</StyledNavLink>
              {isLoggedIn && (
                <StyledNavLink to="/contacts">Contacts</StyledNavLink>
              )}
            </nav>

            {isLoggedIn ? <UserBar /> : <AuthNav />}
          </AppBarWrapper>
        </Container>
      </AppBar>

      <Suspense
        fallback={isLoading ? Loading.dots(loaderOptions) : Loading.remove()}
      >
        <Container>
          <main>
            <Outlet />
          </main>
        </Container>
      </Suspense>

      <Toast />
    </>
  );
}
