import { AccentedIconButton } from 'styling/buttons';

import styled from 'styled-components';
import { HiPlus, HiChevronDoubleRight } from 'react-icons/hi';

// Body height adjust to compensate for positioned header height
const header = document.querySelector('.header');
const { height: headerHeight } = header.getBoundingClientRect();
const subtractedValue = `${headerHeight}px`;

export const PageWrapper = styled.div`
  display: flex;
  height: calc(100vh - ${subtractedValue});

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const LeftSide = styled.div`
  padding: 25px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 768px) {
    height: 55%;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: calc(768px + 1px)) {
    max-width: 450px;
    padding-top: 50px;
    flex-grow: 1;
    gap: 30px;
  }

  --background-fallback: rgb(245, 245, 245);
  --gradient-start-color: rgba(240, 248, 255, 1);
  --gradient-end-color: rgba(245, 245, 245, 1);

  background: var(--background-fallback);
  background: linear-gradient(
    0deg,
    var(--gradient-start-color) 55%,
    var(--gradient-end-color) 100%
  );
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;

  @media screen and (max-width: 768px) {
    justify-content: center;
    height: 45%;
  }

  @media screen and (min-width: calc(768px + 1px)) {
    padding-top: 50px;
    flex-grow: 1;
  }
`;

// Left detailed

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const NewContactIconButton = styled(AccentedIconButton)`
  --size: 40px;
`;

export const NewRandomContactButton = styled(AccentedIconButton)`
  --size: 40px;
`;

export const AddIcon = styled(HiPlus)`
  --size: 50%;
  height: var(--size);
  width: var(--size);
`;

export const AddRandomIcon = styled(HiChevronDoubleRight)`
  --size: 50%;
  height: var(--size);
  width: var(--size);
`;

export const Bar = styled.div`
  display: flex;
  gap: 15px;

  align-items: center;
`;
