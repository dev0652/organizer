import { AccentedIconButton } from 'constants/theme';
import { styled } from 'styled-components';
import { HiPlus } from 'react-icons/hi';

export const PageWrapper = styled.div`
  display: flex;
  /* height: 100%; */

  height: 100vh;
  /* overflow-y: hidden; */
  /* background-color: beige; */
  outline: auto;
`;

export const Sidebar = styled.div`
  padding: 25px;
  max-width: 400px;

  display: flex;
  flex-direction: column;
  gap: 30px;
  flex-grow: 1;

  --background-fallback: rgb(245, 245, 245);
  --gradient-start-color: rgba(240, 248, 255, 1);
  --gradient-end-color: rgba(245, 245, 245, 1);

  background: var(--background-fallback);
  background: linear-gradient(
    0deg,
    var(--gradient-start-color) 55%,
    var(--gradient-end-color) 100%
  );
  /* background-attachment: fixed; */

  /* height: 100vh; */
  /* height: 100%; */
  /* overflow-y: auto; */
`;

export const Right = styled.div`
  display: flex;
  padding: 25px;
  padding-top: 50px;
  /* flex-grow: 10; */
  /* align-items: start; */
`;

// export const ErrorWrapper = styled.div`
//   height: 50vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 20px;
`;

export const NewContactIconButton = styled(AccentedIconButton)`
  --size: 100%;
  height: var(--size);
  width: 40px;
`;

export const AddIcon = styled(HiPlus)`
  --size: 70%;
  height: var(--size);
  width: var(--size);
`;

export const Bar = styled.div`
  display: flex;
  gap: 20px;
`;
