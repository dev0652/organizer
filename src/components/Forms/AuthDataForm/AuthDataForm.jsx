import { useDispatch } from 'react-redux';

import { login, register } from 'redux/auth/operations';

import { AccentedButton as SubmitButton } from 'styling/buttons';
import { FieldsWrapper, FormWrapper, TextField } from 'styling/forms';
import { AuthFormContainer, ButtonGroup } from './AuthDataForm.styled';
import { toast } from 'react-hot-toast';
import SwitchForms from '../SwitchForms/SwitchForms';
import Section from 'components/Section/Section';

// ################################################

export default function AuthDataForm({ formType }) {
  const dispatch = useDispatch();

  const isSignUp = formType === 'register';
  let buttonText, messageText, operation;

  if (formType === 'login') {
    buttonText = 'Sign in';
    messageText = 'Login successful';
    operation = login;
  }

  if (isSignUp) {
    buttonText = 'Create an account';
    messageText = 'Registration successful';
    operation = register;
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
      .then(toast.success(messageText))
      .catch(er => toast.error(er.message));

    form.reset();
    // toggleModal();
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
              defaultValue="dev0652@mail.au"
              required
            />
            {/* Pass */}
            <TextField
              type="password"
              name="password"
              placeholder="Password"
              defaultValue="1234567"
              pattern="(?=.*).{7,}"
              title="Password must be at least 7 characters long"
              required
            />
          </FieldsWrapper>

          <ButtonGroup>
            <SubmitButton type="submit">{buttonText}</SubmitButton>

            <SwitchForms condition={isSignUp} />
          </ButtonGroup>
        </FormWrapper>
      </Section>
    </AuthFormContainer>
  );
}
