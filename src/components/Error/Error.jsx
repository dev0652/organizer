import { Icon, Message, Text, Wrapper } from './Error.styled';

export default function Error() {
  return (
    <Wrapper>
      <Icon />
      <Text>
        <Message>Something went wrong</Message>
        <Message>Try reloading the page or check back later</Message>
      </Text>
    </Wrapper>
  );
}
