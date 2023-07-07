import styled from 'styled-components';

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
  font-size: 1.3rem;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: ${({ theme }) => theme.borderRadius.large};

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
