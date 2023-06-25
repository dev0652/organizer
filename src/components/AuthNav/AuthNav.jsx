import React, { Component } from 'react';
import { StyledNavLink } from 'styling/links';
import { Wrapper } from './AuthNav.styled';

export default class AuthNav extends Component {
  render() {
    return (
      <Wrapper>
        <StyledNavLink to="/register">Sign Up</StyledNavLink>
        <StyledNavLink to="/login">Sign in</StyledNavLink>
      </Wrapper>
    );
  }
}
