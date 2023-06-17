import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

import Modal from 'components/Modal';
import Section from 'components/Section';
import EditForm from 'components/EditForm';

import {
  EditButton,
  DeleteButton,
  ButtonWrapper,
  CardWrapper,
  Image,
  ImageWrapper,
  Meta,
  Name,
  TelephoneLink,
  EmailLink,
} from './Card.styled';

// ##################################################

export const Card = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  const dispatch = useDispatch();

  const { items, currentId } = useSelector(selectContacts);
  const { name, phone, email, image } = items.find(
    item => item.id === currentId
  );

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <CardWrapper>
      <ImageWrapper>
        <Image src={image} alt={name} width={200} />
      </ImageWrapper>

      <Meta>
        <Name>{name}</Name>

        <TelephoneLink href={`tel:+${phone}`}>{phone}</TelephoneLink>

        <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
      </Meta>

      <ButtonWrapper>
        <EditButton type="button" onClick={toggleModal}>
          Edit
        </EditButton>

        <DeleteButton type="button" onClick={() => handleDelete(currentId)}>
          Delete
        </DeleteButton>
      </ButtonWrapper>

      {showModal && (
        <Modal onClose={toggleModal}>
          <Section title="Edit Contact">
            <EditForm
              toggleModal={toggleModal}
              nameToEdit={name}
              phoneToEdit={phone}
              emailToEdit={email}
              id={currentId}
            />
          </Section>
        </Modal>
      )}
    </CardWrapper>
  );
};
