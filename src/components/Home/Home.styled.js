import styled from 'styled-components';

// Body height adjust to compensate for positioned header height
const header = document.querySelector('.header');
const { height: headerHeight } = header.getBoundingClientRect();
const subtractedValue = `${headerHeight}px`;

export const Wrapper = styled.div`
  /* height: calc(100% - ${subtractedValue}); */
  height: calc(100vh - ${subtractedValue});
  /* height: 100vh; */
  /* height: 100%; */

  display: flex;
  flex-direction: column;
  gap: 20px;
  /* justify-content: center; */
  align-items: center;
  padding-top: 10vh;

  color: white;

  background-color: #6684ff;
  background: linear-gradient(105.62deg, #524abe -7.88%, #6684ff 100%);
`;

export const HomeImage = styled.img`
  max-height: 65%;
`;

export const HomeText = styled.p`
  font-size: 1.6rem;
  display: block;
  text-align: center;
  max-width: 80%;
`;
