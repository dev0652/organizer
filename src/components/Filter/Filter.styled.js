import { BaseTextField } from 'constants/theme';
import { styled } from 'styled-components';

export const TextField = styled(BaseTextField)`
  width: 100%;
  padding: 0 25px;

  &::placeholder {
    color: Silver;
    /* padding-left: 15px; */
  }
`;
