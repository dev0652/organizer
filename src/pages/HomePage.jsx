import Home from 'components/Home';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Welcome to EasyContacts" />
      </Helmet>

      <Home />
    </>
  );
}
