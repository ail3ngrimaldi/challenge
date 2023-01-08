import {  initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = initializeApp({ 
  name: process.env.REACT_APP_NAME,
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
 });

 let firebaseApp; 

 if (!getApps().length) {     
  firebaseApp = initializeApp(firebaseConfig); 
  } else { 
  firebaseApp = getApp(); 
}

 export const db = getFirestore(firebaseApp);
