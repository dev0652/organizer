import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

import { ContactLink, List, ListItem } from './Contacts.styled';

import { setSelectedContactId } from 'redux/contacts/slice';
import { Toast } from 'components/Toast/Toast';

// ################################################

const Contacts = () => {
  const dispatch = useDispatch();

  // If filtered, display only contacts matching the filter
  const visibleContacts = useSelector(selectVisibleContacts);

  // Sort contacts in alphabetical order
  const sortedContacts = [...visibleContacts].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const handleContactClick = event => {
    event.preventDefault();
    dispatch(setSelectedContactId(event.target.id));
  };

  return (
    <List>
      <Toast />
      {sortedContacts.map(({ id, name, phone }) => (
        <ListItem key={id}>
          <ContactLink href="" onClick={handleContactClick} id={id}>
            {name}
          </ContactLink>
        </ListItem>
      ))}
    </List>
  );
};

export default Contacts;
