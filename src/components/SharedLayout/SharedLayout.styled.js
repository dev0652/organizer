import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AppBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  /* background-color: rgb(3, 37, 65); */

  > nav {
    display: flex;
  }
`;

export const StyledNavLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  /* color: whiteSmoke; */

  :hover,
  :focus {
    text-decoration: none;
    color: goldenRod;
    font-weight: 500;
  }

  &.active {
    color: rgb(45, 187, 208);
    font-weight: 500;

    :hover,
    :focus {
      text-decoration: none;
      color: goldenRod;
    }
  }
`;
