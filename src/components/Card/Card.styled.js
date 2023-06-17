import { styled } from 'styled-components';
import { BaseButton, BaseCardLink } from 'constants/theme';

export const CardWrapper = styled.div`
  /* border: 6px solid lightgray; */
  border-radius: ${({ theme }) => theme.borderRadius};
  /* background-color: ${({ theme }) => theme.colors.lightBg}; */
  /* box-shadow: ${({ theme }) => theme.boxShadow}; */

  padding: 20px 30px;
  flex-grow: 1;
  max-width: 400px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ImageWrapper = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
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
  font-size: 2rem;
  font-weight: 600;
`;

export const TelephoneLink = styled(BaseCardLink)``;

export const EmailLink = styled(BaseCardLink)``;

export const ButtonWrapper = styled.div`
  display: flex;
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
