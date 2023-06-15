import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'services/api';

// Asynchronous action generator:
const payloadCreator = async () => {
  const contacts = await api.fetchContacts();
  return contacts;
};

export const fetchContacts = createAsyncThunk('contacts/fetch', payloadCreator);
