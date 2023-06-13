import { createReducer } from '@reduxjs/toolkit';

import defaultContacts from 'data/defaultContacts';
import localStorage from 'localStorage';
import { addContact, deleteContact } from './actions';

// ##################################

const initialState = localStorage.load() ?? defaultContacts;

const properties = {
  [addContact]: (state, action) => {
    state.push(action.payload);
  },
  [deleteContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
};

const contactsReducer = createReducer(initialState, properties);

export default contactsReducer;
