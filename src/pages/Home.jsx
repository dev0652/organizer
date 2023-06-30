import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Learning React Helmet!</title>
        <meta name="description" content="Welcome to my React playground" />
      </Helmet>

      <div>
        {/* <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/aa8625109287767.5fd08439c7676.jpg"
          srcset="https://mir-s3-cdn-cf.behance.net/project_modules/disp/aa8625109287767.5fd08439c7676.jpg 600w, https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/aa8625109287767.5fd08439c7676.jpg 1200w, https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/aa8625109287767.5fd08439c7676.jpg 1400w, https://mir-s3-cdn-cf.behance.net/project_modules/fs/aa8625109287767.5fd08439c7676.jpg 1920w, https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/aa8625109287767.5fd08439c7676.jpg 2800w"
          sizes="(max-width: 2800px) 100vw, 2800px"
          alt="UI Design 3D Illustration"
        /> */}
      </div>
    </>
  );
}
