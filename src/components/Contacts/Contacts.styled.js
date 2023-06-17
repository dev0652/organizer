import { styled } from 'styled-components';
import { BaseIconButton } from 'constants/theme';
import { BsTrash3 } from 'react-icons/bs';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  overflow-y: auto;
`;

export const ListItem = styled.li`
  width: 100%;
  display: flex;
  /* justify-content: space-between; */
  gap: 30px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;
export const Name = styled.p``;

export const ContactLink = styled.a`
  flex-grow: 1;
  color: black;
  font-size: 1.1rem;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: ${({ theme }) => theme.borderRadius};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.highlightedText};
    background-color: #4285f4;
    font-weight: 500;
  }
`;

export const DeleteIcon = styled(BsTrash3)`
  --size: 50%;
  height: var(--size);
  width: var(--size);
`;

export const DeleteIconButton = styled(BaseIconButton)`
  --size: 100%;
  height: var(--size);
  width: 40px;

  /* color: #4285f4; */
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
