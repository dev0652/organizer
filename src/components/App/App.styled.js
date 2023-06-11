import { styled } from 'styled-components';

export const Wrapper = styled.div`
  padding: 15px;
  min-width: 200px;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;

  gap: 40px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 20px;
  /* justify-content: space-between; */
`;

export const OpenModalButton = styled.button`
  flex-grow: 1;
`;

export const LoadDefaultsButton = styled.button`
  /* position: absolute;
  top: 20px;
  right: 20px; */
  /* display: inline-flex; */
  /* height: 100%; */
`;
