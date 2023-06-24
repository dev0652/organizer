import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Learning React Helmet!</title>
        <meta name="description" content="Welcome to my React playground" />
      </Helmet>

      <div>Welcome to our homepage</div>
    </>
  );
}
