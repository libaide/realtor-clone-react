// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmOGe0NgO-tZayvOfSTN64KzcdBoDJhOI",
  authDomain: "realtor-clone-react-7245b.firebaseapp.com",
  projectId: "realtor-clone-react-7245b",
  storageBucket: "realtor-clone-react-7245b.firebasestorage.app",
  messagingSenderId: "288439549854",
  appId: "1:288439549854:web:dd0b6c6b6fda815404208f"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();