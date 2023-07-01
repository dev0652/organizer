import { styled } from 'styled-components';

export const Page = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  /* height: 100%; */
`;

export const BannerSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10vh;

  /* background-color: #660dd9; */

  background-color: #6684ff;
  background: linear-gradient(105.62deg, #524abe -7.88%, #6684ff 100%);

  padding: 65px 12px 0;
  overflow: hidden;
  color: #fff;

  width: 50%;
  padding: 0 30px;

  display: flex;
  /* justify-content: center; */
  align-items: center;
`;

export const BannerTextWrapper = styled.div`
  margin-top: 20vh;
`;

export const BannerText = styled.p`
  font-size: 2rem;
  text-align: center;
  font-weight: bold;
`;

export const BannerImage = styled.img`
  /* max-width: 40vw; */
  width: 90%;
  max-width: 600px;
`;

export const FormSide = styled.div`
  width: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;

// export const xxx = styled.div``;
