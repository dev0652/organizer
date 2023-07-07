import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth, selectContacts } from 'redux/selectors';
import { Outlet } from 'react-router-dom';

import UserBar from 'components/UserBar';
import AuthNav from 'components/AuthNav';

import { Loading } from 'notiflix/build/notiflix-loading-aio';
import loaderOptions from 'services/loaderOptions';

import { AppBar, AppBarWrapper, Container } from './SharedLayout.styled';
import { logout, refresh } from 'redux/auth/operations';
import PageNav from 'components/PageNav/PageNav';

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

  const fallback = isLoading ? Loading.dots(loaderOptions) : Loading.remove();

  return (
    <>
      <AppBar className="header">
        <Container>
          <AppBarWrapper>
            <PageNav isLoggedIn={isLoggedIn} />

            {isLoggedIn ? <UserBar /> : <AuthNav />}
          </AppBarWrapper>
        </Container>
      </AppBar>

      {!isRefreshing && (
        <Container>
          <main>
            <Suspense fallback={fallback}>
              <Outlet />
            </Suspense>
          </main>
        </Container>
      )}
    </>
  );
}
