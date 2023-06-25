// import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { register } from 'redux/auth/operations';

import { AccentedButton as SubmitButton } from 'styling/buttons';
import { FieldsWrapper, FormWrapper, TextField } from 'styling/forms';
import { FormContainer } from './SignUpForm.styled';
import { toast } from 'react-hot-toast';

// ################################################

export default function SignUpForm() {
  //
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const resetForm = () => {
  //   setName('');
  //   setEmail('');
  //   setPassword('');
  // };

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
    // toast.success('submitted');
    // form.reset();
    // resetForm()
    // toggleModal();
  };

  // Update input on change
  // const handleChange = event => {
  //   const { name, value } = event.currentTarget;

  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;
  //     case 'email':
  //       setEmail(value);
  //       break;
  //     case 'password':
  //       setPassword(value);
  //       break;
  //     default:
  //       return;
  //   }
  // };

  return (
    <FormContainer>
      <FormWrapper onSubmit={handleSubmit}>
        <FieldsWrapper>
          <TextField
            type="text"
            name="name"
            placeholder="Name"
            // value={name}
            value="placeholder"
            // onChange={handleChange}
            required
          />

          <TextField
            type="email"
            name="email"
            placeholder="Email"
            // value={email}
            value="mailbox@mail.nl"
            // onChange={handleChange}
            required
          />

          <TextField
            type="password"
            name="password"
            placeholder="Password"
            // value={password}
            value="1234567"
            // onChange={handleChange}
            pattern="(?=.*).{7,}"
            title="Password must be at least 7 characters long"
            required
          />
        </FieldsWrapper>

        <SubmitButton type="submit">Sign Up</SubmitButton>
      </FormWrapper>
    </FormContainer>
  );
}
