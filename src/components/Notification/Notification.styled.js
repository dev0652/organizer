import { styled } from 'styled-components';
import { RxCrossCircled } from 'react-icons/rx';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  color: IndianRed;
  color: gray;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Icon = styled(RxCrossCircled)`
  --size: 8rem;
  height: var(--size);
  width: var(--size);
`;

export const Message = styled.p`
  font-size: 1.5rem;
  /* color: #635993; */
`;
