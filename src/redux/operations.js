import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'services/api';

function generateOperation(type) {
  function payloadCreator(type) {
    const statement = type === 'fetch' ? `${type}Contacts` : `${type}Contact`;
    return async arg => await api[statement](arg ? arg : '');
  }
  return createAsyncThunk(`contacts/${type}`, payloadCreator(type));
}

export const fetchContacts = generateOperation('fetch');
export const addContact = generateOperation('add');
export const deleteContact = generateOperation('delete');
