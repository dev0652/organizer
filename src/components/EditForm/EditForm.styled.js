import { BaseButton, BaseTextField } from 'constants/theme';
import { styled } from 'styled-components';

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

export const TextField = styled(BaseTextField)``;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const EditButton = styled(BaseButton)``;
