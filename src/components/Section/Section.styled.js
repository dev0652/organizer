import { styled } from 'styled-components';

export const Wrapper = styled.div`
  /* margin-bottom: 10px; */
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.accentDark};
`;
