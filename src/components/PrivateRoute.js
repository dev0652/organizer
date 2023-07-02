import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectToken } from 'redux/selectors';

// Lomach:

export default function PrivateRoute({ children, redirectTo }) {
  const isToken = useSelector(selectToken);

  return isToken ? children : <Navigate to={redirectTo} />;
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
