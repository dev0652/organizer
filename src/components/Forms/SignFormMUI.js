import * as React from 'react';

import { login, register } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';

import { toast } from 'react-hot-toast';
import SwitchForms from 'components/Forms/SwitchForms/SwitchForms';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';

const defaultTheme = createTheme();

export default function SignFormMUI({ formType }) {
  const isSignUp = formType === 'register';

  const dispatch = useDispatch();

  let title,
    buttonText,
    toastMessage,
    operation,
    emailDefaultValue,
    passDefaultValue;

  if (formType === 'login') {
    title = 'Sign in';
    buttonText = 'Sign in';
    toastMessage = 'Login successful';
    operation = login;
    emailDefaultValue = 'dev0652@mail.au';
    passDefaultValue = '1234567';
  }

  if (isSignUp) {
    title = 'Sign up';
    buttonText = 'Create an account';
    toastMessage = 'Registration successful';
    operation = register;
    emailDefaultValue = '';
    passDefaultValue = '';
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState(emailDefaultValue);
  const [password, setPassword] = useState(passDefaultValue);

  const isButtonDisabled = isSignUp
    ? !email || !password || !name
    : !email || !password;

  const handleSubmit = event => {
    event.preventDefault();

    // const form = event.currentTarget;

    // const credentials = {
    //   email: form.elements.email.value,
    //   password: form.elements.password.value,
    // };

    // if (isSignUp) credentials.name = form.elements.name.value;

    const credentials = isSignUp
      ? { name, email, password }
      : { email, password };

    dispatch(operation(credentials))
      .unwrap()
      .then(() => toast.success(toastMessage))
      .catch(() => toast.error('Error authenticating. Please try again later'));

    // form.reset();
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleChange = ({ target: { value, name } }) => {
    name === 'name'
      ? setName(value)
      : name === 'email'
      ? setEmail(value)
      : setPassword(value);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: '17vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {title}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            {/* Name */}
            {isSignUp && (
              <TextField
                type="text"
                name="name"
                placeholder="Name"
                margin="normal"
                required
                fullWidth
                label="Name"
                autoComplete="name"
                value={name}
                onChange={handleChange}
              />
            )}

            {/* Email */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              // autoFocus
              onChange={handleChange}
              value={email}
              defaultValue={emailDefaultValue}
            />

            {/* Password */}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
              value={password}
              defaultValue={passDefaultValue}
              // error={!valid}
              // helperText={valid ? '' : 'Incorrect entry'}
              pattern="(?=.*).{7,}"
              title="Password must be at least 7 characters long"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={isButtonDisabled}
            >
              {buttonText}
            </Button>

            <SwitchForms condition={isSignUp} />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
