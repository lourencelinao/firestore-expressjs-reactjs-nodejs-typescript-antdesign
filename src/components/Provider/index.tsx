import { User } from '@firebase/auth-types';
import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'App.styles';
import { Loading } from 'components';
import { AuthContext } from 'contexts/AuthContext';
import { auth } from 'firebase';
import defaultTheme from 'themes/default';

type Props = {
  children?: React.ReactNode | React.ReactNode[];
};

export default function ContextProvider(props: Props) {
  const { children } = props;
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [pending, setPending] = useState<boolean>(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user as User);
      setPending(false);
    });
  }, []);

  if (pending) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider value={currentUser}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </AuthContext.Provider>
  );
}
