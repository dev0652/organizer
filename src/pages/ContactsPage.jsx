import Contacts from 'components/Contacts';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/selectors';

export default function ContactsPage() {
  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <>
      <Helmet>
        <title>Contacts</title>
        <meta name="description" content="My contacts" />
      </Helmet>

      {isLoggedIn && <Contacts />}
    </>
  );
}
