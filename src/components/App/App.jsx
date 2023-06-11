import { useState } from 'react';
import { useSelector } from 'react-redux';

import Section from 'components/Section';
import Form from 'components/Form';
import Contacts from 'components/Contacts';
import Filter from 'components/Filter';
import Notification from 'components/Notification';
import Modal from 'components/Modal/Modal';
import {
  ButtonsWrapper,
  LoadDefaultsButton,
  OpenModalButton,
  Wrapper,
} from './App.styled';

// ################################################

export default function App() {
  const contacts = useSelector(state => state.contacts);

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  return (
    <Wrapper>
      <ButtonsWrapper>
        <OpenModalButton type="button" onClick={toggleModal}>
          New contact
        </OpenModalButton>

        {/* This form is used to reload the page after LocalStorage has been cleared */}
        <form>
          <LoadDefaultsButton
            type="submit"
            onClick={() => window.localStorage.clear()}
          >
            Load defaults
          </LoadDefaultsButton>
        </form>
      </ButtonsWrapper>

      {showModal && (
        <Modal onClose={toggleModal}>
          <Section title="Add Contact">
            <Form toggleModal={toggleModal} />
          </Section>
        </Modal>
      )}

      <Section title="Contacts">
        {contacts.length === 0 && (
          <Notification message="Your phonebook is empty" />
        )}

        {contacts.length > 1 && <Filter />}

        {contacts.length > 0 && <Contacts />}
      </Section>
    </Wrapper>
  );
}
