import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'services/api';

function generateOperation(type) {
  function payloadCreator(type) {
    const statement = type === 'fetch' ? `${type}Contacts` : `${type}Contact`;
    return async (arg1 = null, arg2 = null) =>
      await api[statement](arg1 && arg1, arg2 && arg2, !arg1 && !arg2 && '');
  }
  return createAsyncThunk(`contacts/${type}`, payloadCreator(type));
}

export const fetchContacts = generateOperation('fetch');
export const addContact = generateOperation('add');
export const deleteContact = generateOperation('delete');
export const editContact = generateOperation('edit');
