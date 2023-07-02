import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact, fetchContacts } from 'redux/contacts/operations';

import { faker } from '@faker-js/faker';
import { toast } from 'react-hot-toast';

import Section from 'components/Section';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Forms/Filter';
import Modal from 'components/Modal';
import Card from 'components/Card';
import Prompt from 'components/Prompt';
import ContactDataForm from 'components/Forms/ContactDataForm';

import {
  AddIcon,
  NewContactIconButton,
  Right,
  Sidebar,
  Bar,
  PageWrapper,
  NewRandomContactButton,
  ButtonsWrapper,
  AddRandomIcon,
} from './Contacts.styled';

// ################################################

export default function Contacts() {
  const { items, isLoading, error, currentId } = useSelector(selectContacts);

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .catch(() =>
        toast.error('Error loading contacts. Please refresh the page')
      );
  }, [dispatch]);

  const addRandomContact = () => {
    const randomContact = {
      name: faker.person.fullName(),
      number: faker.phone.number(),
      // email: faker.internet.exampleEmail(),
      // image: faker.internet.avatar(),
    };

    dispatch(addContact(randomContact))
      .then(
        toast.success(`${randomContact.name} has been added to the phonebook`)
      )
      .catch(er => toast.error(er.message));
  };

  const errorMessages = [
    'Something went wrong',
    'Try refreshing the page or check back later',
  ];
  const infoMessages = [
    items.length === 0
      ? 'Phonebook is empty'
      : 'Select a contact to display here',
  ];
  const messages = error ? errorMessages : infoMessages;

  return (
    <PageWrapper>
      <Sidebar>
        <Bar>
          <Filter />

          <ButtonsWrapper>
            <NewContactIconButton
              type="button"
              onClick={toggleModal}
              disabled={error}
              aria-label="New contact"
            >
              <AddIcon />
            </NewContactIconButton>

            <NewRandomContactButton
              type="button"
              onClick={addRandomContact}
              disabled={error}
              aria-label="New random contact (for testing)"
            >
              <AddRandomIcon />
            </NewRandomContactButton>
          </ButtonsWrapper>
        </Bar>

        {items.length > 0 && <ContactsList />}
      </Sidebar>

      <Right>
        {/* <Prompt messages={messages} isError={!isLoading && error} /> */}

        {!currentId && !error && <Prompt messages={messages} />}
        {!isLoading && error && <Prompt messages={messages} isError={true} />}

        {currentId && !error && <Card />}
      </Right>

      {showModal && (
        <Modal onClose={toggleModal}>
          <Section title="New Contact">
            <ContactDataForm formType={'add'} toggleModal={toggleModal} />
          </Section>
        </Modal>
      )}
    </PageWrapper>
  );
}
