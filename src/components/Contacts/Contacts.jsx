import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

import {
  DeleteIconButton,
  ContactLink,
  List,
  ListItem,
  DeleteIcon,
} from './Contacts.styled';

import { deleteContact } from 'redux/operations';
import { setSelectedContactId } from 'redux/contacts/slice';

// ################################################

const Contacts = () => {
  const dispatch = useDispatch();

  // If filtered, display only contacts matching the filter
  const visibleContacts = useSelector(selectVisibleContacts);

  // Sort contacts in alphabetical order
  const sortedContacts = [...visibleContacts].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const handleContactClick = event => {
    event.preventDefault();
    dispatch(setSelectedContactId(event.target.id));
  };

  return (
    <List>
      {sortedContacts.map(({ id, name, phone }) => (
        <ListItem key={id}>
          <ContactLink href="" onClick={handleContactClick} id={id}>
            {name}
          </ContactLink>

          <DeleteIconButton
            onClick={() => handleDelete(id)}
            aria-label="Delete contact"
          >
            <DeleteIcon />
          </DeleteIconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default Contacts;
