import { BaseTextField } from 'constants/theme';
import { styled } from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const TextField = styled(BaseTextField)`
  width: 90%;
`;
