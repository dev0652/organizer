import { Helmet } from 'react-helmet-async';

// import AuthDataForm from 'components/Forms/AuthDataForm';
import AuthBody from 'components/AuthBody';
import { FlexCentered } from 'styling/positioning';
import SignFormMUI from 'components/Forms/SignFormMUI';

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta
          name="description"
          content="Log in to view your personalized items"
        />
      </Helmet>

      <FlexCentered>
        <AuthBody>
          {/* <AuthDataForm formType="login" /> */}
          <SignFormMUI formType="login" />
        </AuthBody>
      </FlexCentered>
    </>
  );
}
