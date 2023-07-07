import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth, selectContacts } from 'redux/selectors';
import { Outlet } from 'react-router-dom';

import UserBar from 'components/UserBar';
import AuthNav from 'components/AuthNav';

import { Loading } from 'notiflix/build/notiflix-loading-aio';
import loaderOptions from 'services/loaderOptions';

import { StyledNavLink } from 'styling/links';
import { AppBar, AppBarWrapper, Container } from './SharedLayout.styled';
import { logout, refresh } from 'redux/auth/operations';
import PageNav, { TabsRouter } from 'components/PageNav/PageNav';

// ##############################

export default function SharedLayout() {
  const { isLoading } = useSelector(selectContacts);
  const { isLoggedIn, isRefreshing, user, token } = useSelector(selectAuth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (token && !user.name)
      dispatch(refresh(token))
        .unwrap()
        .catch(() => dispatch(logout())); // log out if token is outdated
  }, [dispatch, token, user]);

  return (
    <>
      <AppBar className="header">
        <Container>
          <AppBarWrapper>
            {/* <nav>
              <StyledNavLink to="/">Home</StyledNavLink>
              {isLoggedIn && (
                <StyledNavLink to="/contacts">Contacts</StyledNavLink>
              )}
            </nav> */}
            <PageNav isLoggedIn={isLoggedIn} />
            {/* <TabsRouter /> */}

            {isLoggedIn ? <UserBar /> : <AuthNav />}
          </AppBarWrapper>
        </Container>
      </AppBar>

      {!isRefreshing && (
        <Container>
          <Suspense
            fallback={
              isLoading ? Loading.dots(loaderOptions) : Loading.remove()
            }
          >
            <main>
              <Outlet />
            </main>
          </Suspense>
        </Container>
      )}
    </>
  );
}
