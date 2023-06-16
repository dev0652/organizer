import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';

import { fetchContacts, addContact, deleteContact } from 'redux/operations';
import * as r from 'redux/reducers';

// ################################################

const extraActions = [fetchContacts, addContact, deleteContact];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, r.handleFetchFulfilled)
      .addCase(addContact.fulfilled, r.handleAddFulfilled)
      .addCase(deleteContact.fulfilled, r.handleDeleteFulfilled)
      .addMatcher(isFulfilled(...extraActions), r.handleFulfilled)
      .addMatcher(isPending(...extraActions), r.handlePending)
      .addMatcher(isRejected(...extraActions), r.handleRejected),
});

export const contactsReducer = contactsSlice.reducer;
