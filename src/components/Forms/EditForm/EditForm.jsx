import { useState } from 'react';
import { toast } from 'react-hot-toast';
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
  const [number, setNumber] = useState(phoneToEdit);
  // const [email, setEmail] = useState(emailToEdit);

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const editedContact = {
      name,
      number,
      // email
    };

    dispatch(editContact({ id, editedContact }))
      .then(toast.success('Changes have been saved'))
      .catch(er => toast.error(er.message));

    toggleModal();
  };

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
      // case 'email':
      //   setEmail(value);
      //   break;
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
          name="number"
          required
          value={number}
          onChange={handleChange}
          placeholder="Telephone"
        />

        {/* <TextField
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
        /> */}
      </FieldsWrapper>

      <SubmitButton type="submit">Save changes</SubmitButton>
    </FormWrapper>
  );
}
