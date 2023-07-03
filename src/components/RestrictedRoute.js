import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectToken } from 'redux/selectors';

// Lomach:

export default function RestrictedRoute({ children, redirectTo }) {
  const isToken = useSelector(selectToken);
  const location = useLocation();

  return !isToken ? (
    children
  ) : (
    <Navigate to={location.state ?? redirectTo} state={location} />
  ); // take the user back to where he came from
}

// Repeta:

// export default function RestrictedRoute({ component, redirectTo = '/' }) {
//   const { isLoggedIn } = useSelector(selectAuth);

//   return isLoggedIn ? <Navigate to={redirectTo} /> : component;
// }
