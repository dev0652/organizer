import { Helmet } from 'react-helmet-async';
// import { useState } from 'react';

// import Modal from 'components/Modal';
// import Section from 'components/Section';
import SignInForm from 'components/Forms/SignInForm/SignInForm';

export default function Login() {
  // const [showModal, setShowModal] = useState(false);
  // const toggleModal = () => setShowModal(!showModal);

  return (
    <>
      <Helmet>
        <title>Register</title>
        <meta
          name="description"
          content="Log in page. You need to be logged in to view your personalized items"
        />
      </Helmet>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <SignInForm />
      </div>

      {/* <Modal onClose={toggleModal}>
        <Section title="Create a New Account">
          <SignUpForm toggleModal={toggleModal} />
        </Section>
      </Modal> */}
    </>
  );
}
