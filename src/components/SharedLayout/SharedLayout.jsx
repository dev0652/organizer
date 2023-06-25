import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AppBar, Container, StyledNavLink } from './SharedLayout.styled';

import { Loading } from 'notiflix/build/notiflix-loading-aio';
import loaderOptions from 'services/loaderOptions';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

// ##############################

export default function SharedLayout() {
  const { isLoading } = useSelector(selectContacts);

  return (
    <>
      <AppBar className="header">
        <Container>
          <nav>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/contacts">Contacts</StyledNavLink>
            <StyledNavLink to="/register">Sign Up</StyledNavLink>
          </nav>
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
    </>
  );
}
