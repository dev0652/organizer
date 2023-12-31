import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { containerStyle, toastOptions } from 'services/toastOptions';
import { Toaster } from 'react-hot-toast';

import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';

import SharedLayout from 'components/SharedLayout';
import NotFound from 'pages/NotFound';
import Register from 'pages/RegisterPage';
import Login from 'pages/LoginPage';

const HomePage = lazy(() => import('pages/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
// const Register = lazy(() => import('pages/Register'));
// const Login = lazy(() => import('pages/Login'));
// const NotFound = lazy(() => import('pages/NotFound'));

// ################################################

export default function App() {
  return (
    <>
      <Toaster containerStyle={containerStyle} toastOptions={toastOptions} />

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login">
                <ContactsPage />
              </PrivateRoute>
            }
          />
        </Route>

        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/contacts">
              <Register />
            </RestrictedRoute>
          }
        />

        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts">
              <Login />
            </RestrictedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
