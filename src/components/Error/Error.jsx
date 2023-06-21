import PropTypes from 'prop-types';
import { Icon, Message, Text, Wrapper } from './Error.styled';

export default function Error({ message }) {
  return (
    <Wrapper>
      <Icon />
      <Text>
        <Message>{message}</Message>
        <Message>Try reloading the page or check back later</Message>
      </Text>
    </Wrapper>
  );
}

// ######################################

Error.propTypes = {
  message: PropTypes.string.isRequired,
};
