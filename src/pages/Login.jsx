import { Helmet } from 'react-helmet-async';

import AuthDataForm from 'components/Forms/AuthDataForm';
import AuthBody from 'components/AuthBody';

export default function Login() {
  return (
    <>
      <Helmet>
        <title>Register</title>
        <meta
          name="description"
          content="Log in page. You need to be logged in to view your personalized items"
        />
      </Helmet>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <AuthBody>
          <AuthDataForm formType="login" />
        </AuthBody>
      </div>
    </>
  );
}
