import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';

import * as ops from 'redux/contacts/operations';
import * as r from 'redux/contacts/reducers';

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
    toastMessage: null,
    toastType: 'success',
  },
  reducers: {
    setSelectedContactId(state, { payload }) {
      state.currentId = payload;
    },
    resetToastMessage(state) {
      state.toastMessage = null;
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

export const { setSelectedContactId, resetToastMessage } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
