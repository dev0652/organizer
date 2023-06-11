import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import toast from 'react-hot-toast';

import { addContact } from 'redux/contacts/actions';
import { FormWrapper, Label } from './Form.styled';

// ################################################

export default function Form({ toggleModal }) {
  //
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const { contacts } = useSelector(state => state);

  const handleSubmit = event => {
    event.preventDefault();

    if (checkIfContactExists(name)) {
      toast.error(`${name} is already a contact`);
      return;
    }

    dispatch(addContact(name, number));
    toast.success(`${name} has been added to the phonebook`);
    toggleModal();
  };

  // Check if contact with this name already exists
  const checkIfContactExists = nameToCompare =>
    contacts.find(
      ({ name }) => name.toLowerCase() === nameToCompare.toLowerCase()
    );

  // Update input on change
  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Label>
        Name
        <input
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </Label>

      <Label>
        Number
        <input
          type="tel"
          name="number"
          // pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
          // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </Label>

      <button type="submit">Add contact</button>
    </FormWrapper>
  );
}
