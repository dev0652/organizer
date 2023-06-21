import PropTypes from 'prop-types';
import { Icon, Message, Text, Wrapper } from './Error.styled';

//

const Error = ({ message }) => (
  <Wrapper>
    <Icon />
    <Text>
      <Message>{message}</Message>
      <Message>Try reloading the page or check back later</Message>
    </Text>
  </Wrapper>
);

export default Error;

// ######################################

Error.propTypes = {
  message: PropTypes.string.isRequired,
};
