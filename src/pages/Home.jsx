import React from 'react';
import { Helmet } from 'react-helmet-async';
import { styled } from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  gap: 20px;
  /* justify-content: center; */
  align-items: center;
  padding-top: 10vh;

  color: white;

  /* background-color: #6684ff;
  background: linear-gradient(105.62deg, #524abe -7.88%, #6684ff 100%); */

  background-color: #660dd9;
`;

const HomeImage = styled.img`
  max-width: 80vh;
`;

const HomeText = styled.p`
  font-size: 1.6rem;
  display: block;
  text-align: center;
  max-width: 70vw;
`;

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Learning React Helmet!</title>
        <meta name="description" content="Welcome to my React playground" />
      </Helmet>

      <Wrapper>
        <h1>Forget about Google</h1>

        <HomeText>
          Create, manage and access your contacts with piece of mind without
          fear of being tracked by the Evil Corporation.
        </HomeText>

        <HomeImage
          src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/aa8625109287767.5fd08439c7676.jpg"
          srcset="https://mir-s3-cdn-cf.behance.net/project_modules/disp/aa8625109287767.5fd08439c7676.jpg 600w, https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/aa8625109287767.5fd08439c7676.jpg 1200w, https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/aa8625109287767.5fd08439c7676.jpg 1400w, https://mir-s3-cdn-cf.behance.net/project_modules/fs/aa8625109287767.5fd08439c7676.jpg 1920w, https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/aa8625109287767.5fd08439c7676.jpg 2800w"
          sizes="(max-width: 2800px) 100vw, 2800px"
          alt="UI Design 3D Illustration"
        />
      </Wrapper>
    </>
  );
}
