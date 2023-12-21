// Import the functions you need from the SDKs you need
import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6dNRPzm5JoK3ywE73-BfnMMMwnbfZ0-E",
  authDomain: "fitness-proj-32bb1.firebaseapp.com",
  databaseURL: "https://fitness-proj-32bb1-default-rtdb.firebaseio.com",
  projectId: "fitness-proj-32bb1",
  storageBucket: "fitness-proj-32bb1.appspot.com",
  messagingSenderId: "415442543452",
  appId: "1:415442543452:web:09bd2dee24f68f5e021799"
};




export const FIREBASE_APP = initializeApp(firebaseConfig)
export const FIREBASE_DB = getFirestore(FIREBASE_APP)
// export const FIREBASE_AUTH = getAuth(FIREBASE_APP)


