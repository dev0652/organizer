import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const SwitchFormsText = styled.p`
  text-align: center;
  font-size: 0.9rem;
`;
const StyledLink = styled(Link)`
  font-weight: 500;
`;

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
