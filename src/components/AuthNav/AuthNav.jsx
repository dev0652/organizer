import React from 'react';
import { Wrapper } from './AuthNav.styled';
import Button from '@mui/material/Button';

export default function AuthNav() {
  return (
    <Wrapper>
      <Button variant="contained" href="/organizer/login">
        Log in
      </Button>

      <Button variant="outlined" href="/organizer/register">
        Sign Up
      </Button>
    </Wrapper>
  );
}
