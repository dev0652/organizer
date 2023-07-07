import React from 'react';
// import { StyledNavLink } from 'styling/links';
import { Wrapper } from './AuthNav.styled';
import Button from '@mui/material/Button';

export default function AuthNav() {
  return (
    <Wrapper>
      {/* <StyledNavLink to="/register">Sign Up</StyledNavLink> */}
      {/* <StyledNavLink to="/login">Sign in</StyledNavLink> */}

      <Button variant="contained" href="/organizer/login">
        Log in
      </Button>

      <Button variant="outlined" href="/organizer/register">
        Sign Up
      </Button>
    </Wrapper>
  );
}
