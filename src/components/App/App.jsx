import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Section from 'components/Section';
import Form from 'components/Form';
import Contacts from 'components/Contacts';
import Filter from 'components/Filter';
import Notification from 'components/Notification';
import Modal from 'components/Modal/Modal';
import { OpenModalButton, Wrapper } from './App.styled';

import { getContacts } from 'redux/contacts/slice';
import { fetchContacts } from 'redux/operations';

// ################################################

export default function App() {
  const { items, isLoading, error } = useSelector(getContacts);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <OpenModalButton type="button" onClick={toggleModal}>
        New contact
      </OpenModalButton>

      {showModal && (
        <Modal onClose={toggleModal}>
          <Section title="Add Contact">
            <Form toggleModal={toggleModal} />
          </Section>
        </Modal>
      )}

      <Section title="Contacts">
        {isLoading && <p>Loading phonebook...</p>}
        {error && <p>{error}</p>}

        {items.length === 0 && (
          <Notification message="Your phonebook is empty" />
        )}

        {items.length > 1 && <Filter />}

        {items.length > 0 && <Contacts />}
      </Section>
    </Wrapper>
  );
}
