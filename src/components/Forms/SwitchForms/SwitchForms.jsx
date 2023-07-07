import { StyledLink, SwitchFormsText } from './SwitchForms.styled';

export default function SwitchForms({ condition }) {
  let message, linkTo, buttonText;

  if (condition) {
    message = 'Already have an account?';
    linkTo = '/login';
    buttonText = 'Sign in';
  } else {
    message = "Don't have an account yet?";
    linkTo = '/register';
    buttonText = 'Sign up';
  }

  return (
    <SwitchFormsText>
      {message} <StyledLink to={linkTo}>{buttonText}</StyledLink>
    </SwitchFormsText>
  );
}
