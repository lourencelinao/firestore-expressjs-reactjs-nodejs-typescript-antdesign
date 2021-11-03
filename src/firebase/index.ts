import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

import config from '../configs/index';

const firebaseApp = initializeApp(config.REACT_FIREBASE_CONFIG);

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
