import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducer';
import localStorage from '../localStorage';

import contactsReducer from './contacts/reducer';
import filterReducer from './filter/reducer';

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
