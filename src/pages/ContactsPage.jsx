import Contacts from 'components/Contacts';
import { Helmet } from 'react-helmet-async';

export default function ContactsPage() {
  return (
    <>
      <Helmet>
        <title>Contacts</title>
        <meta name="description" content="My contacts" />
      </Helmet>

      <Contacts />
    </>
  );
}
