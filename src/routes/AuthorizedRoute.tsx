import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { AuthContext } from 'contexts/AuthContext';

type Props = React.ComponentProps<typeof Route> & {
  redirect: string;
};

export default function AuthorizedRoute(props: Props) {
  const { redirect } = props;

  const currentUser = useContext(AuthContext);

  if (!currentUser) {
    return <Redirect to={redirect} />;
  }

  return <Route {...props} />;
}
