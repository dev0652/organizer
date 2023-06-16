import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'services/api';

// ! https://redux-toolkit.js.org/api/createAsyncThunk#handling-thunk-errors

// Fetch:
const payloadCreatorFetch = async () => {
  const data = await api.fetchContacts();
  return data;
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  payloadCreatorFetch
);

// Add:
const payloadCreatorAdd = async newContact => {
  const data = await api.addContact(newContact);
  return data;
};

export const addContact = createAsyncThunk('contacts/add', payloadCreatorAdd);

// Delete:
const payloadCreatorDelete = async id => {
  const data = await api.deleteContact(id);
  return data;
};

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  payloadCreatorDelete
);
