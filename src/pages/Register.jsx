import { Helmet } from 'react-helmet-async';
// import { useState } from 'react';

// import Modal from 'components/Modal';
// import Section from 'components/Section';
import AuthDataForm from 'components/Forms/AuthDataForm';
import AuthBody from 'components/AuthBody/AuthBody';

export default function Register() {
  return (
    <>
      <Helmet>
        <title>Register</title>
        <meta
          name="description"
          content="Register or log in to see your personalized items"
        />
      </Helmet>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <AuthBody>
          <AuthDataForm formType="register" />
        </AuthBody>
      </div>
    </>
  );
}
