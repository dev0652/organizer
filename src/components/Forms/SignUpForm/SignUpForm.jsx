import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { editContact } from 'redux/contacts/operations';

import { AccentedButton as SubmitButton } from 'styling/buttons';
import { FieldsWrapper, FormWrapper, TextField } from 'styling/forms';

// ################################################

export default function SignUpForm({ toggleModal }) {
  //
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const editedContact = { name, email, password };

    dispatch(editContact({ editedContact }));
    toggleModal();
  };

  // Update input on change
  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'password':
        setPassword(value);
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
          placeholder="Name"
          value={name}
          onChange={handleChange}
          required
        />

        <TextField
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
          required
        />

        <TextField
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
          required
        />
      </FieldsWrapper>

      <SubmitButton type="submit">Save changes</SubmitButton>
    </FormWrapper>
  );
}
