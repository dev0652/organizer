import React from 'react';
import { Icon, Message, Text, Wrapper } from './Prompt.styled';

export default function Prompt({ length }) {
  const message =
    length === 0 ? 'Phonebook is empty' : 'Select a contact to display here';

  return (
    <Wrapper>
      <Icon />
      <Text>
        <Message>{message}</Message>
      </Text>
    </Wrapper>
  );
}
