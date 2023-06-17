import { styled } from 'styled-components';
import { BaseButton, BaseCardLink } from 'constants/theme';

export const CardWrapper = styled.div`
  border: 6px solid lightgray;
  border-radius: 10px;
  padding: 20px 15px;
  flex-grow: 1;
  max-width: 400px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ImageWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  background-color: red;
  width: 200px;

  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const Image = styled.img`
  object-position: center;
  object-fit: cover;
`;

export const Meta = styled.div`
  font-size: 1.5rem;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Name = styled.p`
  font-weight: 600;
`;

export const TelephoneLink = styled(BaseCardLink)``;

export const EmailLink = styled(BaseCardLink)``;

export const ButtonWrapper = styled.div`
  display: flex;
  /* justify-content: end; */
  gap: 20px;
`;

export const EditButton = styled(BaseButton)``;

export const DeleteButton = styled(BaseButton)`
  &:hover,
  &:focus {
    color: whitesmoke;
    background-color: ${({ theme }) => theme.colors.warning};
    font-weight: 500;
  }
`;
