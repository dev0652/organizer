import { createSelector } from '@reduxjs/toolkit';

// Authentication
export const selectAuth = state => state.auth;
export const selectToken = state => state.auth.token;

// Filter
export const selectFilter = state => state.filter;

// Contacts
export const selectContacts = state => state.contacts;

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
//   return items.filter(contact => contact.name.toLowerCase().includes(filter));};
