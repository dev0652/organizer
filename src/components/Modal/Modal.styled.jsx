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
  /* cursor: not-allowed; */
`;

export const ModalContent = styled.div`
  width: 300px;
  background-color: #fff;
  padding: 30px;
  align-self: flex-start;
  margin-top: 10vh;

  border-radius: 6px;

  background: var(--background-fallback);
  background: linear-gradient(
    0deg,
    var(--gradient-start-color) 55%,
    var(--gradient-end-color) 100%
  );
`;
