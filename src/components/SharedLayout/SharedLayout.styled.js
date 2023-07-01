import styled from 'styled-components';
import { breakpoints } from 'styling/variables';

// const mobile = breakpoints.mobile;
const tablet = breakpoints.tablet;
const desktop = breakpoints.desktop;
const desktopWide = breakpoints.desktopWide;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;

  /* @media screen and (max-width: (${tablet} - 1)) {
    min-width: calc(100vw - 40px);
  } */

  /* @media screen and (min-width: ${tablet}) {
    width: ${tablet};
  } */

  @media screen and (min-width: ${desktop}) {
    width: ${desktop};
  }

  /* @media screen and (min-width: ${desktopWide}) {
    width: ${desktopWide};
  } */

  width: 100%;
`;

export const AppBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AppBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  padding: 8px 10px;
  border-bottom: 2px solid gray;

  /* color: white;
  background-color: #6684ff;
  background: linear-gradient(105.62deg, #524abe -7.88%, #6684ff 100%); */

  nav {
    display: flex;
    gap: 5px;
  }
`;
