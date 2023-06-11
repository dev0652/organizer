import toast from 'react-hot-toast';

// ################################

export const rootReducer = (state, action) => {
  switch (action.type) {
    //   Add contact
    case 'contacts/addedContact':
      const name = action.payload.name;

      // Check if contact with this name already exists
      const checkIfContactExists = nameToCompare =>
        state.contacts.find(
          ({ name }) => name.toLowerCase() === nameToCompare.toLowerCase()
        );

      if (checkIfContactExists(name)) {
        toast.error(`${name} is already a contact`);
        return state;
      }

      toast.success(`${name} has been added to the phonebook`);

      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    //   Delete contact
    case 'contacts/deletedContact':
      toast.success('Contact has been deleted');

      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };

    //   Update filter
    case 'filter/updatedFilter':
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};
