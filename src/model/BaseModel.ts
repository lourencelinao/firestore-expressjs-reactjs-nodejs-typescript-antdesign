import { DocumentData } from '@firebase/firestore/dist/index';
import { Timestamp } from 'firebase/firestore';

import { Service } from '../types/ServiceModel.type';

export type BaseModel = Service & {
  id?: string;
  created_at: Timestamp;
  deleted_at: Timestamp | null;
  document?: DocumentData;
  updated_at: Timestamp;
};
