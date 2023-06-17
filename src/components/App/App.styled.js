import { styled } from 'styled-components';

export const ErrorWrapper = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  padding: 15px;
  min-width: 200px;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;

  gap: 40px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 20px;

  /* justify-content: end; */
`;

export const OpenModalButton = styled.button`
  /* flex-grow: 1; */
  /* --size: 5rem;
  height: var(--size);
  width: var(--size);
  border-radius: 50%; */

  font-size: 1.2rem;

  padding: 5px 15px;
  border: 2px solid black;
  border-radius: 6px;

  background-color: lightGray;
  /* color: SteelBlue; */

  &:hover,
  &:focus {
    background-color: steelBlue;
    font-weight: 500;
  }
`;

export const LoadDefaultsButton = styled.button`
  --size: 4rem;
  height: var(--size);
  width: var(--size);
  border-radius: 50%;
`;

// ############

export const TestWrapper = styled.div`
  display: flex;
`;

export const Sidebar = styled.div`
  /* display: flex; */
  padding: 25px;
  /* min-width: 200px; */
  max-width: 300px;
  /* margin-left: auto;
  margin-right: auto; */
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  gap: 40px;

  background-color: #f7f7f7;
  height: 100vh;
  overflow-y: auto;
`;

export const Right = styled.div`
  display: flex;
  padding: 25px;
  padding-top: 50px;
  flex-grow: 1;
  align-items: start;
`;

export const Temp = styled.div`
  display: flex;
  gap: 10px;
`;
