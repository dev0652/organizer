import { styled } from 'styled-components';
import { BaseIconButton } from 'constants/theme';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
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
  /* min-width: 60%; */
  padding: 10px 20px;
  border-radius: ${({ theme }) => theme.borderRadius};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.highlightedText};
    background-color: #4285f4;
    font-weight: 500;
  }
`;

export const DeleteIconButton = styled(BaseIconButton)`
  color: #4285f4;
  padding: 0 15px;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.highlightedText};
    background-color: ${({ theme }) => theme.colors.warning};
    font-weight: 500;
  }
`;
