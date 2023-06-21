import React from 'react';
import { Icon, Message, Text, Wrapper } from './Prompt.styled';

export const Prompt = () => (
  <Wrapper>
    <Icon />
    <Text>
      <Message>Select a contact to display here</Message>
    </Text>
  </Wrapper>
);
