import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AppBar, Container, StyledNavLink } from './SharedLayout.styled';

// ##############################

export default function SharedLayout() {
  return (
    <>
      <AppBar>
        <Container>
          <nav>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/contacts">Contacts</StyledNavLink>
          </nav>
        </Container>
      </AppBar>

      <Suspense fallback={<div>Loading...</div>}>
        <Container>
          <main>
            <Outlet />
          </main>
        </Container>
      </Suspense>
    </>
  );
}
