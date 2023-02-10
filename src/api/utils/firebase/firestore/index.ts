import firebase from 'firebase/compat';
import DocumentData = firebase.firestore.DocumentData;
import { CollectionReference, Firestore } from '@firebase/firestore';
import { collection } from 'firebase/firestore';

export const getCollectionRef = <T = DocumentData>(firestore: Firestore, collectionName: string) => {
  return collection(firestore, collectionName) as CollectionReference<T>;
};
