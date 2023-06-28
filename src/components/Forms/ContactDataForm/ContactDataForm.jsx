import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import toast from 'react-hot-toast';

import { addContact, editContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/selectors';

import { AccentedButton as SubmitButton } from 'styling/buttons';
import { FieldsWrapper, FormWrapper, TextField } from 'styling/forms';

// ################################################

export default function ContactDataForm({
  formType,
  editValues = null,
  toggleModal,
}) {
  // const { prePopulatedName, prePopulatedNumber, prePopulatedEmail, id } = editValues;
  const { prePopulatedName, prePopulatedNumber, id } = editValues;
  // let buttonText, initNameValue, initNumberValue, initEmailValue, toastMessage, operation, args;
  let buttonText, initNameValue, initNumberValue, toastMessage, operation, args;

  const [name, setName] = useState(initNameValue);
  const [number, setNumber] = useState(initNumberValue);
  // const [email, setEmail] = useState(initEmailValue);

  // const data = { name, number, email };
  const data = { name, number };

  const { items } = useSelector(selectContacts);
  const dispatch = useDispatch();

  if (formType === 'add') {
    buttonText = 'Add contact';
    initNameValue = '';
    initNumberValue = '';
    // initEmailValue = '';
    operation = addContact;
    args = [data];
  }

  if (formType === 'edit') {
    buttonText = 'Save changes';
    initNameValue = prePopulatedName;
    initNumberValue = prePopulatedNumber;
    // initEmailValue = prePopulatedEmail;
    operation = editContact;
    args = [id, data];
  }

  if (formType === 'add') toastMessage = `Contact '${name}' was added`;
  if (formType === 'edit') toastMessage = 'Changes have been saved';

  const handleSubmit = event => {
    event.preventDefault();

    if (formType === 'add') {
      if (checkIfContactExists(name)) {
        toast.error(`${name} is already a contact`);
        return;
      }
    }

    dispatch(operation(args))
      .then(toast.success(toastMessage))
      .catch(er => toast.error(er.message));

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
          type="tel"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
        /> */}
      </FieldsWrapper>

      <SubmitButton type="submit">{buttonText}</SubmitButton>
    </FormWrapper>
  );
}
