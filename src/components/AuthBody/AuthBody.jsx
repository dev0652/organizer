import {
  BannerImage,
  BannerSide,
  BannerText,
  BannerTextWrapper,
  FormSide,
  Page,
} from './AuthBody.styled';

import logo from 'images/project10.png';
// import logo from 'images/project8.png';

export default function AuthBody({ children }) {
  return (
    <Page>
      <BannerSide>
        <BannerTextWrapper>
          <BannerText>A simple and secure way</BannerText>
          <BannerText>to manage your contacts</BannerText>
        </BannerTextWrapper>

        <BannerImage src={logo} alt="UI Design  Illustration" />
      </BannerSide>
      <FormSide>{children}</FormSide>
    </Page>
  );
}
