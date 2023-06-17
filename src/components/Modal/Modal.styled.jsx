import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
  cursor: cell;
`;

export const ModalContent = styled.div`
  cursor: auto;

  width: 300px;
  /* background-color: #fff; */
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
