import { nanoid } from 'nanoid';

export const updateFilter = filterValue => ({
  type: 'filter/updatedFilter',
  payload: filterValue,
});

export const addContact = (name, number) => ({
  type: 'contacts/addedContact',
  payload: {
    name,
    number,
    id: nanoid(),
  },
});

export const deletedContact = contactId => ({
  type: 'contacts/deletedContact',
  payload: contactId,
});
