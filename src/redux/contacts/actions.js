import { nanoid } from 'nanoid';
import { ADD, DELETE } from './types';

export const addContact = (name, number) => ({
  type: ADD,
  payload: {
    name,
    number,
    id: nanoid(),
  },
});

export const deletedContact = contactId => ({
  type: DELETE,
  payload: contactId,
});
