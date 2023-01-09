import {  initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { credentials } from './credentials.js'

const firebaseConfig = initializeApp({ 
  credentials
 });

 let firebaseApp; 

 if (!getApps().length) {     
  firebaseApp = initializeApp(firebaseConfig); 
  } else { 
  firebaseApp = getApp(); 
}

 export const db = getFirestore(firebaseApp)
 