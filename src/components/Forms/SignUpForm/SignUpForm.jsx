// import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { register } from 'redux/auth/operations';

import { AccentedButton as SubmitButton } from 'styling/buttons';
import { FieldsWrapper, FormWrapper, TextField } from 'styling/forms';
import { FormContainer } from './SignUpForm.styled';

// ################################################

export default function SignUpForm() {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    const credentials = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(register(credentials));
    form.reset();
    // toggleModal();
  };

  return (
    <FormContainer>
      <FormWrapper onSubmit={handleSubmit}>
        <FieldsWrapper>
          <TextField type="text" name="name" placeholder="Name" required />

          <TextField type="email" name="email" placeholder="Email" required />

          <TextField
            type="password"
            name="password"
            placeholder="Password"
            pattern="(?=.*).{7,}"
            title="Password must be at least 7 characters long"
            required
          />
        </FieldsWrapper>

        <SubmitButton type="submit">Sign up</SubmitButton>
      </FormWrapper>
    </FormContainer>
  );
}
