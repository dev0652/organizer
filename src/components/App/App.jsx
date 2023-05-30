import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import toast from 'react-hot-toast';

import defaultContacts from 'data/contacts';
import storage from '../../storage';

import Section from 'components/Section';
import Form from 'components/Form';
import Contacts from 'components/Contacts';
import Filter from 'components/Filter';
import Notification from 'components/Notification';
import Modal from 'components/Modal/Modal';
import { ResetLS, Wrapper } from './App.styled';

// ################################################

const LS_KEY = 'savedContacts';

export default function App() {
  //
  const [contacts, setContacts] = useState(
    () => storage.load(LS_KEY) ?? defaultContacts
  );
  const [filter, setFilter] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => storage.save(LS_KEY, contacts), [contacts]);

  // Add a contact
  const addContact = (name, number) => {
    const newContact = { id: nanoid(), name, number };

    setContacts(prevState => [...prevState, newContact]);

    toast.success(`${name} has been added to the phonebook`);
  };

  // Delete a contact
  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));

    toast.success('Contact has been deleted');
  };

  // Process user input
  const formSubmitHandler = ({ name, number }) => {
    toggleModal();

    return checkIfContactExists(name)
      ? toast.error(`${name} is already a contact`)
      : addContact(name, number);
  };

  // Check if contact with this name already exists
  const checkIfContactExists = nameToCompare =>
    contacts.find(
      ({ name }) => name.toLowerCase() === nameToCompare.toLowerCase()
    );

  // Filter contacts by name
  const changeFilter = event => setFilter(event.currentTarget.value);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  // Modal пуньк-пуньк
  const toggleModal = () => setShowModal(!showModal);

  return (
    <Wrapper>
      <button type="button" onClick={toggleModal}>
        Add a new contact
      </button>

      {showModal && (
        <Modal onClose={toggleModal}>
          <Section title="Add Contact">
            <Form onSubmit={formSubmitHandler} />
          </Section>
        </Modal>
      )}

      <Section title="Contacts">
        {contacts.length > 1 && (
          <Filter value={filter} onChange={changeFilter} />
        )}

        {contacts.length === 0 && (
          <Notification message="Your phonebook is empty" />
        )}

        {contacts.length !== 0 && (
          <Contacts
            contacts={getFilteredContacts()}
            onDeleteContact={deleteContact}
          />
        )}
      </Section>

      {/* This form is used to reload the page after LocalStorage has been cleared */}
      <form>
        <ResetLS type="submit" onClick={() => window.localStorage.clear()}>
          Reset
        </ResetLS>
      </form>
    </Wrapper>
  );
}
