// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/compat/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyA6dNRPzm5JoK3ywE73-BfnMMMwnbfZ0-E",
  authDomain: "fitness-proj-32bb1.firebaseapp.com",
  databaseURL: "https://fitness-proj-32bb1-default-rtdb.firebaseio.com",
  projectId: "fitness-proj-32bb1",
  storageBucket: "fitness-proj-32bb1.appspot.com",
  messagingSenderId: "415442543452",
  appId: "1:415442543452:web:09bd2dee24f68f5e021799"
};


const app = initializeApp(firebaseConfig);

export {app}

const writeDataToFirestore = async (collection, data) => {
    try {
      const ref = firebase.firestore().collection(collection).doc()
      const response = await ref.set(data)
      return response
    } catch (error) {
      return error
    }
  }

