import {  initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = initializeApp({ 
  name: "dev project",
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
 });

 let firebaseApp; 

 if (!getApps().length) {     
  firebaseApp = initializeApp(firebaseConfig); 
  } else { 
  firebaseApp = getApp(); 
}

 export const db = getFirestore(firebaseApp)
 