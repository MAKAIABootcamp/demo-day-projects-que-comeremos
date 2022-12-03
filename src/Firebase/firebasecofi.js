// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPviQw82DGDzLhD0LSOlC8nOW5UFlrqx8",
  authDomain: "quecomeremoshoy-7ed59.firebaseapp.com",
  projectId: "quecomeremoshoy-7ed59",
  storageBucket: "quecomeremoshoy-7ed59.appspot.com",
  messagingSenderId: "329394064129",
  appId: "1:329394064129:web:5e3544524c08be0de9a900",
  measurementId: "G-MFXG1GSE6X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const google = new GoogleAuthProvider();
export const dataBase= getFirestore(app)
// const analytics = getAnalytics(app);

// // {
//   "hosting": {
//     "site": "quecomeremoshoyy",

//     "public": "public",
//     ...
//   }
// }