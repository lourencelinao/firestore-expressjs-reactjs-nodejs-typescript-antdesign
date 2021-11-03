import { User } from '@firebase/auth-types';
import React from 'react';

export const AuthContext = React.createContext<User | null>(null);
