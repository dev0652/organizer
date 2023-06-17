import { styled } from 'styled-components';

export const theme = {
  colors: {
    accent: '#4285f4',
    accentDark: '#3469c1',
    warning: 'tomato',
    lightBg: '#f7f7f7',

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

export const AccentedButton = styled(BaseButton)`
  color: ${({ theme }) => theme.colors.highlightedText};

  background-color: ${({ theme }) => theme.colors.accent};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.accentDark};
  }
`;

export const BaseIconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  background-color: transparent;
  border-radius: 50%;
`;

export const AccentedIconButton = styled(BaseIconButton)`
  color: ${({ theme }) => theme.colors.highlightedText};

  background-color: ${({ theme }) => theme.colors.accent};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.accentDark};
  }
`;

export const BaseCardLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: 1.2rem;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const BaseTextField = styled.input`
  padding: 0 10px;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 1.1rem;
  line-height: 2;
`;
