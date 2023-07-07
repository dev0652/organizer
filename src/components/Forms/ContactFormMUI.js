import * as React from 'react';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addContact, editContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/selectors';

import toast from 'react-hot-toast';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
import { TextField } from 'styling/forms';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// ################################################

const defaultTheme = createTheme();

export default function ContactFormMUI({
  formType,
  editValues = null,
  toggleModal,
}) {
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
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: '2vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h2" variant="h4">
            {makeTitle(formType)}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            {/* Name */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              type="text"
              name="name"
              // autoFocus
              onChange={handleChange}
              value={name}
            />

            {/* Telephone */}
            <TextField
              margin="normal"
              required
              fullWidth
              name="number"
              label="Telephone"
              type="tel"
              id="number"
              autoComplete="tel"
              onChange={handleChange}
              value={number}
            />

            {/* Email */}
            {/* <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              onChange={handleChange}
              value={email}
            /> */}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={!name || !number}
              //   disabled={!name || !number || !email}
            >
              {buttonText}
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

// ######################

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

function makeTitle(formType) {
  let title = '';

  if (formType === 'add') title = 'Add a New Contact';
  if (formType === 'edit') title = 'Edit Contact';

  return title;
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
