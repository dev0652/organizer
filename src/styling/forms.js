import { styled } from 'styled-components';
import { theme } from 'styling/theme';

export const TextField = styled.input`
  padding: 0 10px;
  border-radius: ${theme.borderRadius};
  font-size: 1.1rem;
  line-height: 2;

  &::placeholder {
    color: Silver;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;
