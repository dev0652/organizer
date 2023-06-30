import { Link } from 'react-router-dom';

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
    <div>
      {message} <Link to={linkTo}>{buttonText}</Link>
    </div>
  );
}
