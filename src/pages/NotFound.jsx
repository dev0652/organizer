import Error404 from 'components/Error404';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 Not found</title>
        <meta name="description" content="Page not found" />
      </Helmet>

      <Error404 />
    </>
  );
}
