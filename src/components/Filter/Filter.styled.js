import { BaseTextField } from 'constants/theme';
import { styled } from 'styled-components';

export const TextField = styled(BaseTextField)`
  width: 100%;
  padding: 2px 25px 0;

  &::placeholder {
    color: Silver;
  }
`;
