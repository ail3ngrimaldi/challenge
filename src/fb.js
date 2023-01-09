import {  initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = initializeApp({ 
  name: "dev project",
  apiKey: "AIzaSyAA34doZVB365D0bpyz4qSrnaQM4SviLNg",
  authDomain: "challenge-form-f0513.firebaseapp.com",
  projectId: "challenge-form-f0513",
  storageBucket: "challenge-form-f0513.appspot.com",
  messagingSenderId: "627927299682",
  appId: "1:627927299682:web:4b78c5bfbaac7be5b1033b"
 });

 let firebaseApp; 

 if (!getApps().length) {     
  firebaseApp = initializeApp(firebaseConfig); 
  } else { 
  firebaseApp = getApp(); 
}

 export const db = getFirestore(firebaseApp)
 