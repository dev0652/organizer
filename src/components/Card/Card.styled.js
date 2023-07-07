import styled from 'styled-components';
import { BaseButton, BaseIconButton } from 'styling/buttons';
import { BaseCardLink } from 'styling/links';

import { BsTrash3 } from 'react-icons/bs';

export const CardWrapper = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.regular};

  padding: 20px 30px;
  flex-grow: 1;

  display: flex;
  gap: 20px;

  flex-direction: column;

  @media screen and (max-width: 768px) {
    flex-direction: row;
  }

  /* @media screen and (min-width: calc(768px + 1px)) {
    max-width: 400px;
  } */
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
    flex-grow: 1;
  }
`;

export const ImageWrapper = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.regular};
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

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: end;
  }
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

export const DeleteIcon = styled(BsTrash3)`
  --size: 60%;
  /* height: var(--size); */
  width: var(--size);
`;

export const DeleteIconButton = styled(BaseIconButton)`
  --size: 40px;

  color: ${({ theme }) => theme.colors.secondaryText};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.highlightedText};
    background-color: ${({ theme }) => theme.colors.warning};
    font-weight: 500;

    & > ${DeleteIcon} {
      transform: scale(1.1);
    }
  }
`;
