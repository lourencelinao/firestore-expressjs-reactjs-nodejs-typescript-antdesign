import { WhereFilterOp } from '@firebase/firestore/dist/index';

export type FilterProps = {
  fieldPath: string;
  operation: WhereFilterOp;
  value: string;
};
