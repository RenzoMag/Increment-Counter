import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7QqZ0KFROHvNqWp-WqGvHdyfuHyxRUz0",
  authDomain: "crush-prueba-de-acceso.firebaseapp.com",
  databaseURL: "https://crush-prueba-de-acceso-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "crush-prueba-de-acceso",
  storageBucket: "crush-prueba-de-acceso.appspot.com",
  messagingSenderId: "137230239277",
  appId: "1:137230239277:web:03c37e73bb9dffb7331aa4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
