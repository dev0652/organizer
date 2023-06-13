import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contacts/slice';
import { filterReducer } from './filter/slice';

import localStorage from '../localStorage';

// ###############################################

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

store.subscribe(() => {
  localStorage.save(store.getState().contacts);
});
