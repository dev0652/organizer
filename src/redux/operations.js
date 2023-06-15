import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'services/api';

// Асинхронний генератор екшену:
const payloadCreator = async () => {
  const contacts = await api.fetchContacts();
  return contacts;
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  payloadCreator
);
// !!! returns an operation that automatically generates actions for pending, fulfilled and rejected promise - see in slice.js
