import { ErrorIcon, InfoIcon, Message, Text, Wrapper } from './Prompt.styled';

export default function Prompt({ isError = false, messages }) {
  return (
    <Wrapper>
      {isError ? <ErrorIcon /> : <InfoIcon />}
      <Text>
        {messages.map(message => (
          <Message>{message}</Message>
        ))}
      </Text>
    </Wrapper>
  );
}
