import image404 from 'images/404.png';
import {
  ErrorNo,
  ErrorText,
  Image,
  StyledLink,
  Wrapper,
} from './Error404.styled';
// import { Suspense } from 'react';

export default function Error404() {
  return (
    // <Suspense fallback={'Loading...'}>
    <Wrapper>
      <Image src={image404} alt="Pile of tangled filmstrip" />

      <div>
        <ErrorNo>Error 404</ErrorNo>
        <ErrorText>Sorry, we couldn't find this page</ErrorText>

        <StyledLink to="/">Take me back to the homepage</StyledLink>
      </div>
    </Wrapper>
    // </Suspense>
  );
}
