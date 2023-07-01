import { styled } from 'styled-components';

export const AuthFormContainer = styled.div`
  margin-top: 30vh;
  width: 70%;
  max-width: 350px;

  scale: 1.2;
`;

export const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 10px;
`;

// export const FormContainer = styled.div`
//   width: 300px;

//   padding: 60px;
//   padding-top: 40px;
//   align-self: flex-start;
//   margin-top: 20vh;

//   border-radius: ${({ theme }) => theme.borderRadius};

//   --background-fallback: rgb(245, 245, 245);
//   --gradient-start-color: rgba(240, 248, 255, 1);
//   --gradient-end-color: rgba(245, 245, 245, 1);

//   background: var(--background-fallback);
//   background: linear-gradient(
//     0deg,
//     var(--gradient-start-color) 55%,
//     var(--gradient-end-color) 100%
//   );
// `;
