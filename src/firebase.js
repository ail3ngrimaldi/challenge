// Importo las funciones que necesito del SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Configuración de firebase
const firebaseConfig = {
  apiKey: "AIzaSyAA34doZVB365D0bpyz4qSrnaQM4SviLNg",
  authDomain: "challenge-form-f0513.firebaseapp.com",
  projectId: "challenge-form-f0513",
  storageBucket: "challenge-form-f0513.appspot.com",
  messagingSenderId: "627927299682",
  appId: "1:627927299682:web:4b78c5bfbaac7be5b1033b"
};

// Inicializo firebase
const app = initializeApp(firebaseConfig);

// Inicializo cloud firestore y obtengo una referencia de ese servicio, y la exporto a los fines de usarlo en el resto de mi aplicación.
export const db = getFirestore(app);