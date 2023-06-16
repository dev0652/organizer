import { createSlice, nanoid } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from 'redux/operations';

// ################################################

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    // Fetch:
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },

    [fetchContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },

    [fetchContacts.rejected](state, { error: { name, message } }) {
      state.isLoading = false;
      // if (name !== 'AbortError') {
      state.error = `${name}: ${message}`;
      // }
    },

    // Add:
    [addContact.pending](state) {
      state.isLoading = true;
    },

    [addContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items.push(payload);
    },

    [addContact.rejected](state, { error: { name, message } }) {
      state.isLoading = false;
      // if (name !== 'AbortError') {
      state.error = `${name}: ${message}`;
      // }
    },

    // Delete:
    [deleteContact.pending](state) {
      state.isLoading = true;
    },

    [deleteContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      // state.items.filter(item => item.id !== payload);
      const index = state.items.findIndex(item => item.id === payload.id);
      state.items.splice(index, 1);
    },

    [deleteContact.rejected](state, { error: { name, message } }) {
      state.isLoading = false;
      // if (name !== 'AbortError') {
      state.error = `${name}: ${message}`;
      // }
    },
  },
});

// export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
