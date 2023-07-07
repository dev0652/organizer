import { useDispatch } from 'react-redux';
import { login, register } from 'redux/auth/operations';
import Button from '@mui/material/Button';

import {
  FieldsWrapper,
  FormWrapper,
  TextField,
  // SubmitButton,
} from 'styling/forms';
import { AuthFormContainer, ButtonGroup } from './AuthDataForm.styled';
import { toast } from 'react-hot-toast';
import SwitchForms from '../SwitchForms/SwitchForms';
import Section from 'components/Section/Section';

// ################################################

export default function AuthDataForm({ formType }) {
  const dispatch = useDispatch();

  const isSignUp = formType === 'register';
  let buttonText, toastMessage, operation, emailDefaultValue, passDefaultValue;

  if (formType === 'login') {
    buttonText = 'Sign in';
    toastMessage = 'Login successful';
    operation = login;
    emailDefaultValue = 'dev0652@mail.au';
    passDefaultValue = '1234567';
  }

  if (isSignUp) {
    buttonText = 'Create an account';
    toastMessage = 'Registration successful';
    operation = register;
    emailDefaultValue = '';
    passDefaultValue = '';
  }

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    const credentials = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    if (isSignUp) credentials.name = form.elements.name.value;

    dispatch(operation(credentials))
      .unwrap()
      .then(() => toast.success(toastMessage))
      .catch(() => toast.error('Error authenticating. Please try again later'));

    form.reset();
  };

  return (
    <AuthFormContainer>
      <Section title={buttonText}>
        <FormWrapper onSubmit={handleSubmit}>
          <FieldsWrapper>
            {/* Name */}
            {isSignUp && (
              <TextField type="text" name="name" placeholder="Name" required />
            )}
            {/* Email */}
            <TextField
              type="email"
              name="email"
              placeholder="Email"
              defaultValue={emailDefaultValue}
              required
            />
            {/* Password */}
            <TextField
              type="password"
              name="password"
              placeholder="Password"
              defaultValue={passDefaultValue}
              pattern="(?=.*).{7,}"
              title="Password must be at least 7 characters long"
              required
            />
          </FieldsWrapper>

          <ButtonGroup>
            {/* <SubmitButton type="submit">{buttonText}</SubmitButton> */}
            <Button variant="contained" type="submit">
              {buttonText}
            </Button>

            <SwitchForms condition={isSignUp} />
          </ButtonGroup>
        </FormWrapper>
      </Section>
    </AuthFormContainer>
  );
}
