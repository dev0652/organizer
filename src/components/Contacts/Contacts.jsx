import { useSelector, useDispatch } from 'react-redux';
import { deletedContact } from 'redux/contacts/actions';

import { BsTrash3 } from 'react-icons/bs';
import toast from 'react-hot-toast';

import {
  Button,
  List,
  ListItem,
  Name,
  Telephone,
  Wrapper,
} from './Contacts.styled';

// ################################################

const getVisibleContacts = (contacts, filter) => {
  if (!filter) return contacts;

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
};

const Contacts = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deletedContact(id));
    toast.success('Contact has been deleted');
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

          <Button onClick={() => handleDelete(id)} aria-label="Delete contact">
            <BsTrash3 />
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default Contacts;
