import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AppBar, StyledNavLink } from './SharedLayout.styled';

// ##############################

export default function SharedLayout() {
  return (
    <div>
      <AppBar>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/contacts">ContactsList</StyledNavLink>
        </nav>
      </AppBar>

      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </div>
  );
}
