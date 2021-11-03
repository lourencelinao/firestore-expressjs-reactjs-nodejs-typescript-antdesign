import { DocumentData, DocumentSnapshot } from '@firebase/firestore/dist/index';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';

import { db } from 'firebase';
import { FilterProps } from 'types/Filter.type';
import { Service } from 'types/ServiceModel.type';

export async function createService<T extends Service>(data: T, path: string) {
  return await addDoc(collection(db, path), data);
}

export async function readService(path: string, filters?: FilterProps[]) {
  let q;

  if (filters) {
    let docFilter =
      filters?.map((filter: FilterProps) => {
        return where(filter?.fieldPath, filter?.operation, filter?.value);
      }) || [];

    docFilter = [...docFilter, where('deleted_at', '==', null)];

    q = query(collection(db, path), docFilter as any);
  } else {
    q = query(collection(db, path), where('deleted_at', '==', null));
  }

  const querySnapshot = await getDocs(q);

  return querySnapshot.forEach((doc: DocumentSnapshot<DocumentData>) => {
    const id = doc?.id.toString();

    return {
      ...doc.data(),
      id,
    };
  });
}

export async function getService(key: string, path: string) {
  const docRef = doc(db, path, key);
  const docSnap = await getDoc(docRef);

  const id = docSnap?.id?.toString();

  return {
    ...docSnap?.data(),
    id,
  };
}

export async function updateService<T extends Service>(key: string, data: T, path: string) {
  const docRef = doc(db, path);

  return await updateDoc(docRef, data);
}

export async function deleteService<T extends Service>(key: string, path: string) {
  const value = { deleted_at: new Date() };
  let data = await getService(key, path);
  data = {
    ...data,
    ...value,
  };

  return await updateService(key, data as unknown as T, path);
}
