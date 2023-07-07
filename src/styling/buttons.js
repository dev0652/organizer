import styled from 'styled-components';
import { theme } from 'styling/theme';

export const BaseButton = styled.button`
  font-size: 1.2rem;
  min-width: 90px;
  padding: 8px 20px;
  border: none;
  border-radius: ${theme.borderRadius.regular};

  background-color: lightGray;

  &:hover,
  &:focus {
    background-color: ${theme.colors.accent};
    color: ${theme.colors.highlightedText};
    font-weight: 500;
  }

  &:active {
    background-color: ${theme.colors.accentDark};
  }
`;

export const AccentedButton = styled(BaseButton)`
  color: ${theme.colors.highlightedText};

  background-color: ${theme.colors.accent};

  &:hover,
  &:focus {
    background-color: ${theme.colors.accentDark};
  }

  &:active {
    background-color: ${theme.colors.accentDarker};
  }
`;

export const BaseIconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  background-color: transparent;
  border-radius: 50%;

  min-height: var(--size);
  height: var(--size);
  width: var(--size);
  min-width: var(--size);
`;

export const AccentedIconButton = styled(BaseIconButton)`
  color: ${theme.colors.highlightedText};

  background-color: ${theme.colors.accent};

  &:hover,
  &:focus {
    background-color: ${theme.colors.accentDark};
  }

  &:disabled {
    /* background-color: ${theme.colors.lightBg}; */
    background-color: gainsboro;
  }
`;
