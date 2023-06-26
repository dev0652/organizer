import Login from 'pages/Login';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { refresh } from 'redux/auth/operations';
import { selectAuth } from 'redux/selectors';

import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';

const SharedLayout = lazy(() => import('components/SharedLayout'));
const Home = lazy(() => import('pages/Home'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const Register = lazy(() => import('pages/Register'));
const NotFound = lazy(() => import('pages/NotFound'));

// ################################################

export default function App() {
  const { isRefreshing } = useSelector(selectAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
    //  const promise = dispatch(refresh())
    // return () => {
    //   // `createAsyncThunk` attaches an `abort()` method to the promise
    //   promise.abort()
    // }
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="contacts"
            element={<PrivateRoute component={<ContactsPage />} />}
          />
          <Route
            path="register"
            element={
              <RestrictedRoute
                component={<Register />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute component={<Login />} redirectTo="/contacts" />
            }
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    )
  );
}
