import { Helmet } from 'react-helmet-async';
// import { useState } from 'react';

// import Modal from 'components/Modal';
// import Section from 'components/Section';
import SignUpForm from 'components/Forms/SignUpForm';

export default function Register() {
  // const [showModal, setShowModal] = useState(false);
  // const toggleModal = () => setShowModal(!showModal);

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
        <SignUpForm />
      </div>

      {/* <Modal onClose={toggleModal}>
        <Section title="Create a New Account">
          <SignUpForm toggleModal={toggleModal} />
        </Section>
      </Modal> */}
    </>
  );
}
