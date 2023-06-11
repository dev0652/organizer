import { combineReducers } from 'redux';

import defaultContacts from '../data/defaultContacts';
import localStorage from '../localStorage';

// ##################################

const contactsInitialState = localStorage.load() ?? defaultContacts;

const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'contacts/addedContact':
      return [...state, action.payload];

    case 'contacts/deletedContact':
      return state.filter(contact => contact.id !== action.payload);

    default:
      return state;
  }
};

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'filter/updatedFilter':
      return action.payload;

    default:
      return state;
  }
};

// ##################################

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;
