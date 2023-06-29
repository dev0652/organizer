import { styled } from 'styled-components';

export const FormContainer = styled.div`
  width: 300px;

  padding: 60px;
  padding-top: 40px;
  align-self: flex-start;
  margin-top: 20vh;

  border-radius: ${({ theme }) => theme.borderRadius};

  --background-fallback: rgb(245, 245, 245);
  --gradient-start-color: rgba(240, 248, 255, 1);
  --gradient-end-color: rgba(245, 245, 245, 1);

  background: var(--background-fallback);
  background: linear-gradient(
    0deg,
    var(--gradient-start-color) 55%,
    var(--gradient-end-color) 100%
  );
`;
