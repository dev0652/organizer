import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';

import * as ops from 'redux/operations';
import * as r from 'redux/reducers';

// ################################################

const extraActions = [
  ops.fetchContacts,
  ops.addContact,
  ops.deleteContact,
  ops.editContact,
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    currentId: null,
  },
  reducers: {
    setSelectedContactId(state, { payload }) {
      state.currentId = payload;
    },
  },

  extraReducers: builder =>
    builder
      .addCase(ops.fetchContacts.fulfilled, r.handleFetchFulfilled)
      .addCase(ops.addContact.fulfilled, r.handleAddFulfilled)
      .addCase(ops.deleteContact.fulfilled, r.handleDeleteFulfilled)
      .addCase(ops.editContact.fulfilled, r.handleEditFulfilled)
      .addMatcher(isFulfilled(...extraActions), r.handleFulfilled)
      .addMatcher(isPending(...extraActions), r.handlePending)
      .addMatcher(isRejected(...extraActions), r.handleRejected),
});

export const { setSelectedContactId } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
