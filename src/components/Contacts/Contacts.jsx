import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';

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

import { deleteContact } from 'redux/operations';

// ################################################

const getVisibleContacts = (contacts, filter) => {
  if (!filter) return contacts;

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
};

// ################################################

const Contacts = () => {
  const { items } = useSelector(getContacts);
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
    toast.success('Contact has been deleted');
  };

  // If filtered, display only contacts matching the filter
  const visibleContacts = getVisibleContacts(items, filter);

  // Sort contacts in alphabetical order
  const sortedContacts = [...visibleContacts].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <List>
      {sortedContacts.map(({ id, name, phone }) => (
        <ListItem key={id}>
          <Wrapper>
            <Name>{name}</Name>
            <Telephone>{phone}</Telephone>
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
