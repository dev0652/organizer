import {
  BannerImage,
  BannerSide,
  BannerText,
  BannerTextWrapper,
  FormSide,
  Page,
} from './AuthBody.styled';

import logo from 'images/project2.png';

export default function AuthBody({ children }) {
  return (
    <Page>
      <BannerSide>
        <BannerTextWrapper>
          <BannerText>Manage your contacts.</BannerText>
          <BannerText>Work with peace of mind</BannerText>
        </BannerTextWrapper>

        <BannerImage src={logo} alt="UI Design  Illustration" />
      </BannerSide>
      <FormSide>{children}</FormSide>
    </Page>
  );
}
