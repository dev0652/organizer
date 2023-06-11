import { useSelector, useDispatch } from 'react-redux';
import { deletedContact } from 'redux/actions';

import toast from 'react-hot-toast';
import { BsTrash3 } from 'react-icons/bs';

import {
  Button,
  List,
  ListItem,
  Name,
  Telephone,
  Wrapper,
} from './Contacts.styled';

// ################################################

const Contacts = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const getVisibleContacts = (contacts, filter) => {
    if (!filter) return contacts;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  // If filtered, display only contacts matching the filter
  const visibleContacts = getVisibleContacts(contacts, filter);

  // Sort contacts in alphabetical order
  const sortedContacts = [...visibleContacts].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <List>
      {sortedContacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <Wrapper>
            <Name>{name}</Name>
            <Telephone>{number}</Telephone>
          </Wrapper>

          <Button
            onClick={() => dispatch(deletedContact(id))}
            aria-label="Delete contact"
          >
            <BsTrash3 />
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default Contacts;
