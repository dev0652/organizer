import React, { Component } from 'react';
import { nanoid } from 'nanoid';

// #########################################

import Section from 'components/Section';
import Form from 'components/Form';
import Contacts from 'components/Contacts';
import Filter from 'components/Filter';
import Notification from 'components/Notification';

import { Wrapper } from './App.styled';

import storage from '../../storage';
const LS_KEY = 'savedContacts';

// #########################################

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // ####### Lifecycle

  componentDidMount() {
    const savedContacts = storage.load(LS_KEY);

    savedContacts && this.setState({ contacts: savedContacts });
  }

  // ####### Methods

  formSubmitHandler = ({ name, number }) => {
    const { checkIfContactExists, addContact } = this;

    return checkIfContactExists(name)
      ? alert(`${name} is already a contact`)
      : addContact(name, number);
  };

  checkIfContactExists = nameToCompare => {
    const { contacts } = this.state;

    return contacts.find(
      ({ name }) => name.toLowerCase() === nameToCompare.toLowerCase()
    );
  };

  // Update local storage
  writeToStorage = () => {
    storage.save(LS_KEY, this.state.contacts); // callback
  };

  // Add contact
  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const updateState = prevState => ({
      contacts: [...prevState.contacts, contact],
      name: '',
    });

    this.setState(updateState, this.writeToStorage);
  };

  // Delete contact
  deleteContact = id => {
    const updateState = prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    });

    this.setState(updateState, this.writeToStorage);
  };

  // Filter

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  // ####### Rendering

  render() {
    const {
      state: { contacts, filter },
      formSubmitHandler,
      changeFilter,
      getFilteredContacts,
      deleteContact,
    } = this;

    return (
      <Wrapper>
        <Section title="Phonebook">
          <Form onSubmit={formSubmitHandler} />
        </Section>

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
      </Wrapper>
    );
  }
}
