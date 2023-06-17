import { styled } from 'styled-components';
import { BaseIconButton } from 'constants/theme';
import { BsTrash3 } from 'react-icons/bs';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  overflow-y: auto;
  padding-right: 20px;
`;

export const ListItem = styled.li`
  width: 100%;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
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

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.highlightedText};
    background-color: #4285f4;
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
