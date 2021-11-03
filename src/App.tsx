import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ContextProvider } from 'components';
import routes from 'constants/routes';
import { DashboardPage, LoginPage, NotFoundPage } from 'pages';
import AuthorizedRoute from 'routes/AuthorizedRoute';
import UnauthorizedRoute from 'routes/UnauthorizedRoute';

const AUTH_REDIRECT = routes.ROOT;
const UNAUTH_REDIRECT = routes.LOGIN;

function App() {
  return (
    <ContextProvider>
      <Router>
        <Switch>
          <AuthorizedRoute
            exact
            path={routes.ROOT}
            component={DashboardPage}
            redirect={UNAUTH_REDIRECT}
          />
          <UnauthorizedRoute
            exact
            path={routes.LOGIN}
            component={LoginPage}
            redirect={AUTH_REDIRECT}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </ContextProvider>
  );
}

export default App;
