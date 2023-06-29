import { Helmet } from 'react-helmet-async';
// import { useState } from 'react';

// import Modal from 'components/Modal';
// import Section from 'components/Section';
import AuthDataForm from 'components/Forms/AuthDataForm';

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
        <AuthDataForm formType="register" />
      </div>

      {/* <Modal onClose={toggleModal}>
        <Section title="Create a New Account">
          <SignUpForm toggleModal={toggleModal} />
        </Section>
      </Modal> */}
    </>
  );
}
