import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  width: 100%;
  max-height: 100%;
  /* max-height: 100vh; */
  /* height: 100%; */
  height: 100vh;
`;

export const BannerSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5vh;
  width: 50%;
  align-items: center;

  color: #fff;
  background-color: #6684ff;
  background: linear-gradient(105.62deg, #524abe -7.88%, #6684ff 100%);

  padding: 20vh 30px 0;

  @media screen and (max-height: 500px) {
    padding: 15vh 30px 0;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const BannerTextWrapper = styled.div``;

export const BannerText = styled.p`
  font-size: 3.6vh;
  text-align: center;
  font-weight: bold;
`;
export const BannerImageCnt = styled.div`
  width: 90%;
  max-width: 500px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-height: 500px) {
    width: 70%;
  }
`;

export const BannerImage = styled.img`
  object-fit: contain;
`;

export const FormSide = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (max-height: 600px) {
    align-items: center;
  }
`;
