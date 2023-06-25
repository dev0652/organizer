import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { editContact } from 'redux/contacts/operations';

import { AccentedButton as SubmitButton } from 'styling/buttons';
import { FieldsWrapper, FormWrapper, TextField } from 'styling/forms';

// ################################################

export default function EditForm({
  toggleModal,
  nameToEdit,
  phoneToEdit,
  emailToEdit,
  id,
}) {
  //
  const [name, setName] = useState(nameToEdit);
  const [phone, setPhone] = useState(phoneToEdit);
  const [email, setEmail] = useState(emailToEdit);

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const editedContact = { name, phone, email };

    dispatch(editContact({ id, editedContact }));
    toggleModal();
  };

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
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
        />
      </FieldsWrapper>

      <SubmitButton type="submit">Save changes</SubmitButton>
    </FormWrapper>
  );
}
