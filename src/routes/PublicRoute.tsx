/* eslint-disable multiline-ternary */
import React, { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authService } from '../services';

const PublicRoute: FC<{ path: string }> = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        authService.getIsAuthenticated() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/taskboard',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PublicRoute;
