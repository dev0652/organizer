import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { breakpoints } from 'constants/variables';

// const mobile = breakpoints.mobile;
const tablet = breakpoints.tablet;
const desktop = breakpoints.desktop;
const desktopWide = breakpoints.desktopWide;

export const Container = styled.div`
  /* outline: 2px solid red; */
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: (${tablet} - 1)) {
    min-width: calc(100vw - 40px);
  }

  @media screen and (min-width: ${tablet}) {
    width: ${tablet};
  }

  @media screen and (min-width: ${desktop}) {
    width: ${desktop};
  }

  @media screen and (min-width: ${desktopWide}) {
    width: ${desktopWide};
  }
`;

// export const HeaderContainer = styled(Container)`
//   outline: 2px solid green;
// `;

export const AppBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  padding: 8px 10px;
  border-bottom: 2px solid gray;

  /* background-color: rgb(3, 37, 65); */

  nav {
    display: flex;
    gap: 5px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: black;
  font-size: 1.1rem;
  text-decoration: none;
  /* padding: 8px 16px; */
  padding: 10px 20px;

  border-radius: ${({ theme }) => theme.borderRadius};

  &.active {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.accent};
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.highlightedText};
    background-color: #4285f4;
    font-weight: 500;
  }
`;