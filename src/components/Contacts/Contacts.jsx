import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact, fetchContacts } from 'redux/contacts/operations';

import { faker } from '@faker-js/faker';
import { toast } from 'react-hot-toast';

// import Section from 'components/Section';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Forms/Filter';
import Modal from 'components/Modal';
import Card from 'components/Card';
import Prompt from 'components/Prompt';
// import ContactDataForm from 'components/Forms/ContactDataForm';
import ContactFormMUI from 'components/Forms/ContactFormMUI';

import {
  AddIcon,
  NewContactIconButton,
  LeftSide,
  RightSide,
  Bar,
  PageWrapper,
  NewRandomContactButton,
  ButtonsWrapper,
  AddRandomIcon,
} from './Contacts.styled';
// import SplitButton from 'components/ButtonGroup/ButtonGroup';

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

  // const splitButtonOptions = ['New', 'Random'];
  // const splitButtonActions = [toggleModal, addRandomContact];

  return (
    <PageWrapper>
      <LeftSide>
        <Bar>
          <div style={{ flexGrow: 1 }}>
            <Filter />
          </div>

          {/* <SplitButton
            options={splitButtonOptions}
            actions={splitButtonActions}
          /> */}

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
      </LeftSide>

      <RightSide>
        {!currentId && !error && <Prompt isEmpty={items.length === 0} />}
        {!isLoading && error && <Prompt isError={error !== null} />}

        {currentId && !error && <Card />}
      </RightSide>

      {showModal && (
        <Modal onClose={toggleModal}>
          {/* <Section title="New Contact">
            <ContactDataForm formType={'add'} toggleModal={toggleModal} />
          </Section> */}
          <ContactFormMUI formType={'add'} toggleModal={toggleModal} />
        </Modal>
      )}
    </PageWrapper>
  );
}
