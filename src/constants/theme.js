import { styled } from 'styled-components';

export const theme = {
  colors: {
    accent: '#4285f4',
    warning: 'tomato',

    primaryText: '#212121',
    secondaryText: 'gray',
    highlightedText: 'whitesmoke',
  },

  spacing: value => `${value * 4}px`,
  borderRadius: '20px',

  boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.19)',
};

export const BaseButton = styled.button`
  font-size: 1.2rem;
  min-width: 90px;
  padding: 8px 20px;
  border: none;
  border-radius: ${theme.borderRadius};

  background-color: lightGray;

  &:hover,
  &:focus {
    background-color: ${theme.colors.accent};
    color: ${theme.colors.highlightedText};
    font-weight: 500;
  }
`;

export const BaseIconButton = styled.button`
  /* display: flex; */
  border: none;
  background-color: transparent;
  border-radius: 50%;
`;

export const BaseCardLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: 1.2rem;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accent};
    /* font-weight: 500; */
  }
`;
