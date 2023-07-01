import image404 from 'images/404.png';
import {
  ErrorNo,
  ErrorText,
  Image,
  StyledLink,
  Wrapper,
} from './Error404.styled';

export default function Error404() {
  return (
    <Wrapper>
      <Image src={image404} alt="Pile of tangled filmstrip" />

      <div>
        <ErrorNo>Error 404</ErrorNo>
        <ErrorText>Sorry, we couldn't find this page</ErrorText>

        <StyledLink to="/">Take me back to the homepage</StyledLink>
      </div>
    </Wrapper>
  );
}
