import React from 'react';
import { Icon, Message, Text, Wrapper } from './Prompt.styled';

export default function Prompt() {
  return (
    <Wrapper>
      <Icon />
      <Text>
        <Message>Select a contact to display here</Message>
      </Text>
    </Wrapper>
  );
}
