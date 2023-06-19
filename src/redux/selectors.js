import { createSelector } from '@reduxjs/toolkit';

// ##################################################

export const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  ({ items }, filter) => {
    if (!filter) return items;

    return items.filter(contact => contact.name.toLowerCase().includes(filter));
  }
);

// export const selectVisibleContacts = state => {

//   const { items } = selectContacts(state);
//   const filter = selectFilter(state);

//   if (!filter) return items;

//   return items.filter(contact => contact.name.toLowerCase().includes(filter));
// };
