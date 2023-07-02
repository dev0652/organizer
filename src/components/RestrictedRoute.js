import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectToken } from 'redux/selectors';

// Lomach:

export default function RestrictedRoute({ children, redirectTo }) {
  const isToken = useSelector(selectToken);

  return !isToken ? children : <Navigate to={redirectTo} />;
}

// Repeta:

// export default function RestrictedRoute({ component, redirectTo = '/' }) {
//   const { isLoggedIn } = useSelector(selectAuth);

//   return isLoggedIn ? <Navigate to={redirectTo} /> : component;
// }
