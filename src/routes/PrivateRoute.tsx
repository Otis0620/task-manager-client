/* eslint-disable react/prop-types */
/* eslint-disable multiline-ternary */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authService } from '../services';

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return authService.getIsAuthenticated() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}

export default PrivateRoute;
