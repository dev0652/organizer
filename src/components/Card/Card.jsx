import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
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
import { deleteContact } from 'redux/operations';

import toast from 'react-hot-toast';

export const Card = () => {
  const dispatch = useDispatch();

  const { items, currentId } = useSelector(selectContacts);
  const { name, phone, email, image } = items.find(
    item => item.id === currentId
  );

  const handleDelete = id => {
    dispatch(deleteContact(id));
    toast.success('Contact has been deleted');
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
        <EditButton type="button">Edit</EditButton>

        <DeleteButton type="button" onClick={() => handleDelete(currentId)}>
          Delete
        </DeleteButton>
      </ButtonWrapper>
    </CardWrapper>
  );
};
