
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC578Cxm5v299bd2YXo07hRJ4oZ3RFS2FE",
    authDomain: "react-cursos-4c93b.firebaseapp.com",
    projectId: "react-cursos-4c93b",
    storageBucket: "react-cursos-4c93b.appspot.com",
    messagingSenderId: "446859511320",
    appId: "1:446859511320:web:d5dca934f14e523b1aa56d"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);