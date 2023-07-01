import React from 'react';
import { Helmet } from 'react-helmet-async';
import { styled } from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  /* align-items: center; */
  padding-top: 20vh;

  color: white;

  background-color: #6684ff;
  background: linear-gradient(105.62deg, #524abe -7.88%, #6684ff 100%);
`;

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Learning React Helmet!</title>
        <meta name="description" content="Welcome to my React playground" />
      </Helmet>

      <Wrapper>
        <h1>Home of your contacts</h1>
      </Wrapper>
    </>
  );
}
