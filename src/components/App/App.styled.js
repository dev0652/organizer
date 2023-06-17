import { AccentedButton, BaseIconButton } from 'constants/theme';
import { styled } from 'styled-components';
import { HiPlus } from 'react-icons/hi';

export const ErrorWrapper = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
`;

export const NewContactIconButton = styled(AccentedButton)`
  --size: 100%;
  height: var(--size);
  width: 40px;
`;

export const AddIcon = styled(HiPlus)`
  --size: 70%;
  height: var(--size);
  width: var(--size);
`;

export const AddRandomContactButton = styled(AccentedButton)`
  position: absolute;
  right: 30px;
  bottom: 30px;

  --size: 4rem;
  height: var(--size);
  width: var(--size);
  border-radius: 50%;

  /* background-color: ${({ theme }) => theme.colors.warning}; */
`;

export const PageWrapper = styled.div`
  display: flex;
`;

export const Sidebar = styled.div`
  padding: 25px;
  max-width: 300px;

  display: flex;
  flex-direction: column;
  gap: 30px;

  background-color: #f7f7f7;
  height: 100vh;
  overflow-y: auto;

  flex-grow: 1;
`;

export const Bar = styled.div`
  display: flex;
  gap: 20px;
`;

export const Right = styled.div`
  display: flex;
  padding: 25px;
  padding-top: 50px;
  flex-grow: 1;
  align-items: start;
`;
