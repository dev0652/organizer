import { ErrorIcon, InfoIcon, Message, Text, Wrapper } from './Prompt.styled';

export default function Prompt({ isError = false, isEmpty }) {
  const errorMessages = [
    'Something went wrong',
    'Try refreshing the page or check back later',
  ];
  const infoMessages = [
    isEmpty ? 'Phonebook is empty' : 'Select a contact to view details',
  ];
  const messages = isError ? errorMessages : infoMessages;

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
