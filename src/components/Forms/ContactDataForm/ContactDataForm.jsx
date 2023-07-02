import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import toast from 'react-hot-toast';

import { addContact, editContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/selectors';

import { SubmitButton } from 'styling/forms';
import { FieldsWrapper, FormWrapper, TextField } from 'styling/forms';

// ################################################

export default function ContactDataForm({
  formType,
  editValues = null,
  toggleModal,
}) {
  //
  const dispatch = useDispatch();

  const { items } = useSelector(selectContacts);
  const { initNameValue, initNumberValue, buttonText } = getInitialValues(
    formType,
    editValues
  );

  const [name, setName] = useState(initNameValue);
  const [number, setNumber] = useState(initNumberValue);
  // const [email, setEmail] = useState(initEmailValue);

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

  const handleSubmit = event => {
    event.preventDefault();

    // const data = { name, number, email };
    const data = { name, number };

    const { operation, operationArgs, toastMessage } = getDispatchData(
      formType,
      editValues,
      data
    );
    //
    if (formType === 'add' && checkIfContactExists(items, name)) {
      toast.error(`${name} is already a contact`);
      return;
    }

    dispatch(operation(operationArgs))
      .unwrap()
      .then(data => {
        if (data.error) throw new Error(data.payload);
        return toast.success(toastMessage);
      })
      .catch(error => toast.error(error.message));

    toggleModal();
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

function getInitialValues(formType, editValues) {
  let initNameValue, initNumberValue, buttonText, operation;

  if (formType === 'add') {
    initNameValue = '';
    initNumberValue = '';
    buttonText = 'Add contact';
  }
  if (formType === 'edit') {
    initNameValue = editValues.name;
    initNumberValue = editValues.number;
    buttonText = 'Save changes';
  }

  return { initNameValue, initNumberValue, buttonText, operation };
}

function getDispatchData(formType, editValues, data) {
  let operationArgs, toastMessage, operation;

  if (formType === 'add') {
    operation = addContact;
    operationArgs = data;
    toastMessage = `Contact '${data.name}' was added`;
  }

  if (formType === 'edit') {
    const id = editValues.id;

    operation = editContact;
    operationArgs = { id, editedContact: data };
    toastMessage = 'Changes have been saved';
  }

  return { operation, operationArgs, toastMessage };
}

// Check if contact with this name already exists
const checkIfContactExists = (items, nameToCompare) =>
  items.find(({ name }) => name.toLowerCase() === nameToCompare.toLowerCase());
