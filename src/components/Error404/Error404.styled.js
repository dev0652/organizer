import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  margin-top: 10vh;
`;

export const Image = styled.img`
  max-height: 40vh;
  max-width: 90vw;
`;

export const ErrorNo = styled.p`
  font-weight: bold;
  font-size: 3rem;
`;

export const ErrorText = styled.p`
  /* font-weight: bold; */
  font-size: 2rem;
`;

export const StyledLink = styled(Link)`
  color: Indigo;
  font-size: 1.5rem;
  display: block;
  margin-top: 1rem;

  :hover,
  :focus {
    color: darkOrange;
  }
`;
