import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import toast from 'react-hot-toast';

import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/selectors';

import { AccentedButton as SubmitButton } from 'styling/buttons';
import { FieldsWrapper, FormWrapper, TextField } from 'styling/forms';

// ################################################

export default function AddForm({ toggleModal }) {
  //
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const { items } = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    if (checkIfContactExists(name)) {
      toast.error(`${name} is already a contact`);
      return;
    }

    dispatch(addContact({ name, phone, email }));
    toggleModal();
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
      case 'email':
        setEmail(value);
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

        <TextField
          type="tel"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
        />
      </FieldsWrapper>

      <SubmitButton type="submit">Add contact</SubmitButton>
    </FormWrapper>
  );
}
