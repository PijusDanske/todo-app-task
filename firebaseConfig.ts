import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: process.env.NEXT_napiKey,
  authDomain: process.env.NEXT_authDomain,
  projectId: process.env.NEXT_projectId,
  storageBucket: process.env.NEXT_storageBucket,
  messagingSenderId: process.env.NEXT_messagingSenderId,
  appId: process.env.NEXT_appId,
};

export const app = initializeApp(firebaseConfig);
export const store = getFirestore(app);
