import { Helmet } from 'react-helmet-async';
import SignUpForm from 'components/Forms/SignUpForm';

export default function Register() {
  return (
    <>
      <Helmet>
        <title>Register</title>
        <meta
          name="description"
          content="Register or log in to see your personalized items"
        />
      </Helmet>

      <SignUpForm />
    </>
  );
}
