import defaultContacts from 'data/defaultContacts';
import localStorage from 'localStorage';

// ##################################

const initialState = localStorage.load() ?? defaultContacts;

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addedContact':
      return [...state, action.payload];

    case 'contacts/deletedContact':
      return state.filter(contact => contact.id !== action.payload);

    default:
      return state;
  }
};

export default contactsReducer;
