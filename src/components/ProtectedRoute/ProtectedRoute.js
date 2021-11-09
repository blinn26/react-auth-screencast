import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ isLoggedIn, children, ...props }) => {
  return (
    <Route {...props}>{isLoggedIn ? children : <Redirect to='/login' />}</Route>
  );
};

export default ProtectedRoute;
