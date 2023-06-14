import { createSlice, nanoid } from '@reduxjs/toolkit';

// ################################################

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    fetchingError(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    addContact: {
      reducer(state, { payload }) {
        state.push(payload);
      },
      prepare(name, number) {
        return {
          payload: { name, number, id: nanoid() },
        };
      },
    },
    deleteContact(state, { payload }) {
      return state.filter(contact => contact.id !== payload);
    },
  },
});

export const {
  addContact,
  deleteContact,
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

// Selector
export const getContacts = state => state.contacts;
