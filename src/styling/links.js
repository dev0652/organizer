import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from 'styling/theme';

export const BaseCardLink = styled.a`
  text-decoration: none;
  color: ${theme.colors.secondaryText};
  font-size: 1.3rem;

  &:hover,
  &:focus {
    color: ${theme.colors.accent};
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: black;
  font-size: 1.1rem;
  text-decoration: none;
  padding: 8px 20px;
  font-weight: 500;

  border-radius: ${({ theme }) => theme.borderRadius.regular};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.highlightedText};
    background-color: ${({ theme }) => theme.colors.accent};
  }

  &.active {
    color: ${({ theme }) => theme.colors.highlightedText};
    background-color: ${({ theme }) => theme.colors.accent};

    /* color: ${({ theme }) => theme.colors.accent}; */

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.accentDark};
    }
  }
`;
