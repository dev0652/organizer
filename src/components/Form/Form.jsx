import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import toast from 'react-hot-toast';

// import { addContact } from 'redux/contacts/slice';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

import {
  AddButton,
  AddRandomContactButton,
  ButtonsWrapper,
  FieldsWrapper,
  FormWrapper,
  TextField,
} from './Form.styled';

// ################################################

export default function Form({ toggleModal }) {
  //
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const { items } = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    if (checkIfContactExists(name)) {
      toast.error(`${name} is already a contact`);
      return;
    }

    const newContact = { name, phone };

    dispatch(addContact(newContact));
    toggleModal();
    toast.success(`${name} has been added to the phonebook`);
  };

  // Check if contact with this name already exists
  const checkIfContactExists = nameToCompare =>
    items.find(
      ({ name }) => name.toLowerCase() === nameToCompare.toLowerCase()
    );

  // Update input on change
  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <FieldsWrapper>
        <TextField
          type="text"
          name="name"
          required
          value={name}
          onChange={handleChange}
          placeholder="Name"
        />

        <TextField
          type="tel"
          name="phone"
          required
          value={phone}
          onChange={handleChange}
          placeholder="Telephone"
        />
      </FieldsWrapper>

      <ButtonsWrapper>
        <AddButton type="submit">Add contact</AddButton>

        <AddRandomContactButton
          type="button"
          onClick={() => dispatch(addContact())}
        >
          Add random
        </AddRandomContactButton>
      </ButtonsWrapper>
    </FormWrapper>
  );
}
