import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from 'redux/operations';

// ################################################

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, { error: { message } }) => {
  state.isLoading = false;
  state.error = message;
};
const setOtherProps = state => {
  state.isLoading = false;
  state.error = null;
};

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
    [fetchContacts.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [fetchContacts.fulfilled](state, { payload }) {
      state.items = payload;
      setOtherProps(state);
    },

    // Add:
    [addContact.pending]: handlePending,
    [addContact.rejected]: handleRejected,
    [addContact.fulfilled](state, { payload }) {
      state.items.push(payload);
      setOtherProps(state);
    },

    // Delete:
    [deleteContact.pending]: handlePending,
    [deleteContact.rejected]: handleRejected,

    [deleteContact.fulfilled](state, { payload }) {
      const index = state.items.findIndex(item => item.id === payload.id);
      state.items.splice(index, 1);
      setOtherProps(state);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
