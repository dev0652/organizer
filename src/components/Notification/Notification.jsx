import PropTypes from 'prop-types';
import { Icon, Message, Text, Wrapper } from './Notification.styled';

//

const Notification = ({ message }) => (
  <Wrapper>
    <Icon />
    <Text>
      <Message>{message}</Message>
      <Message>Try reloading the page or check back later</Message>
    </Text>
  </Wrapper>
);

export default Notification;

// ######################################

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
