import { AccentedIconButton } from 'styling/buttons';

import { styled } from 'styled-components';
import { HiPlus, HiChevronDoubleRight } from 'react-icons/hi';

// Body height adjust to compensate for positioned header height
const header = document.querySelector('.header');
const { height: pageHeaderHeight } = header.getBoundingClientRect();
const subtractedValue = `${pageHeaderHeight}px`;

export const PageWrapper = styled.div`
  display: flex;
  /* height: 100vh; */
  height: calc(100vh - ${subtractedValue});
`;

export const Sidebar = styled.div`
  padding: 25px;
  max-width: 400px;

  display: flex;
  flex-direction: column;
  gap: 30px;
  flex-grow: 1;

  --background-fallback: rgb(245, 245, 245);
  --gradient-start-color: rgba(240, 248, 255, 1);
  --gradient-end-color: rgba(245, 245, 245, 1);

  background: var(--background-fallback);
  background: linear-gradient(
    0deg,
    var(--gradient-start-color) 55%,
    var(--gradient-end-color) 100%
  );

  /* background: linear-gradient(105.62deg, #524abe -7.88%, #6684ff 100%); */
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  padding-top: 50px;
  flex-grow: 1;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  gap: 10px;
`;

export const NewContactIconButton = styled(AccentedIconButton)`
  --size: 40px;
`;

export const NewRandomContactButton = styled(AccentedIconButton)`
  --size: 40px;
`;

export const AddIcon = styled(HiPlus)`
  --size: 70%;
  height: var(--size);
  width: var(--size);
`;

export const AddRandomIcon = styled(HiChevronDoubleRight)`
  --size: 70%;
  height: var(--size);
  width: var(--size);
`;

export const Bar = styled.div`
  display: flex;
  gap: 20px;
`;
