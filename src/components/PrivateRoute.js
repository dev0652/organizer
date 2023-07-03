import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectToken } from 'redux/selectors';

// Lomach:

export default function PrivateRoute({ children, redirectTo }) {
  const isToken = useSelector(selectToken);
  const location = useLocation();

  return isToken ? (
    children
  ) : (
    <Navigate to={location.state ?? redirectTo} state={location} />
  ); // take the user back to where he came from
}

// Repeta:

// export default function PrivateRoute({
//   component: Component,
//   redirectTo = '/login',
// }) {
//   //
//   const { isLoggedIn, isRefreshing } = useSelector(selectAuth);
//   const shouldRedirect = !isRefreshing && !isLoggedIn;

//   return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
// }
