import { useDispatch } from 'react-redux';

import { login } from 'redux/auth/operations';

import { AccentedButton as SubmitButton } from 'styling/buttons';
import { FieldsWrapper, FormWrapper, TextField } from 'styling/forms';
import { FormContainer } from './SignInForm.styled';
import { toast } from 'react-hot-toast';

// ################################################

export default function SignInForm() {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    const credentials = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(login(credentials))
      .then(toast.success('Login successful'))
      .catch(er => toast.error(er.message));

    form.reset();
    // toggleModal();
  };

  return (
    <FormContainer>
      <FormWrapper onSubmit={handleSubmit}>
        <FieldsWrapper>
          <TextField
            type="email"
            name="email"
            placeholder="Email"
            defaultValue="dev0652@mail.au"
            required
          />

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

        <SubmitButton type="submit">Sign in</SubmitButton>
      </FormWrapper>
    </FormContainer>
  );
}
