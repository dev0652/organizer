import {
  BannerSide,
  BannerText,
  BannerTextWrapper,
  FormSide,
  Wrapper,
} from './AuthBody.styled';

export default function AuthBody({ children }) {
  return (
    <Wrapper>
      <BannerSide>
        <BannerTextWrapper>
          <BannerText>Add and manage contacts.</BannerText>
          <BannerText>From everywhere</BannerText>
        </BannerTextWrapper>
      </BannerSide>
      <FormSide>{children}</FormSide>
    </Wrapper>
  );
}
