import {
  BannerImage,
  BannerSide,
  BannerText,
  BannerTextWrapper,
  FormSide,
  Wrapper,
} from './AuthBody.styled';

import logo from 'images/project2.png';

export default function AuthBody({ children }) {
  return (
    <Wrapper>
      <BannerSide>
        <BannerTextWrapper>
          <BannerText>Manage your contacts.</BannerText>
          <BannerText>Work with peace of mind</BannerText>
        </BannerTextWrapper>

        <BannerImage src={logo} alt="UI Design  Illustration" />
      </BannerSide>
      <FormSide>{children}</FormSide>
    </Wrapper>
  );
}
