import React from 'react';
import { Helmet } from 'react-helmet-async';
import { styled } from 'styled-components';

import logo from 'images/project3.png';

// Body height adjust to compensate for positioned header height
const header = document.querySelector('.header');
const { height: headerHeight } = header.getBoundingClientRect();
const subtractedValue = `${headerHeight}px`;

const Wrapper = styled.div`
  height: calc(100vh - ${subtractedValue});

  overflow: hidden;

  display: flex;
  flex-direction: column;
  gap: 20px;
  /* justify-content: center; */
  align-items: center;
  padding-top: 10vh;

  color: white;

  background-color: #6684ff;
  background: linear-gradient(105.62deg, #524abe -7.88%, #6684ff 100%);
`;

const HomeImage = styled.img`
  /* max-width: 70vw; */
  max-height: 65vh;
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
        <h1>Welcome to EasyContacts!</h1>

        <HomeText>
          EasyContacts is a simple and secure app that lets you create, manage
          and access your contacts with piece of mind without fear of being
          tracked by the Evil Corporation.
        </HomeText>

        <HomeImage
          src={logo}
          alt="UI Design 3D Illustration"

          // src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/aa8625109287767.5fd08439c7676.jpg"
          // srcSet="https://mir-s3-cdn-cf.behance.net/project_modules/disp/aa8625109287767.5fd08439c7676.jpg 600w, https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/aa8625109287767.5fd08439c7676.jpg 1200w, https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/aa8625109287767.5fd08439c7676.jpg 1400w, https://mir-s3-cdn-cf.behance.net/project_modules/fs/aa8625109287767.5fd08439c7676.jpg 1920w, https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/aa8625109287767.5fd08439c7676.jpg 2800w"
          // sizes="(max-width: 2800px) 100vw, 2800px"
          // alt="UI Design 3D Illustration"
        />
      </Wrapper>
    </>
  );
}
