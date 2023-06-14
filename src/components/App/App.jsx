import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

import toast from 'react-hot-toast';

import { store } from 'redux/store';
import { loadDefaults } from 'redux/contacts/slice';

import defaultContacts from 'data/defaultContacts';

// ################################################

export default function App() {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  const handleLoadDefaults = () => {
    dispatch(loadDefaults());
    toast.success('Default contacts loaded', {
      style: { background: 'Lavender' },
      icon: '💾',
    });
  };

  const isDefault = store.getState().contacts === defaultContacts;

  return (
    <Wrapper>
      <ButtonsWrapper>
        <OpenModalButton type="button" onClick={toggleModal}>
          New contact
        </OpenModalButton>

        <LoadDefaultsButton
          type="button"
          onClick={handleLoadDefaults}
          disabled={isDefault}
        >
          Load defaults
        </LoadDefaultsButton>
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
