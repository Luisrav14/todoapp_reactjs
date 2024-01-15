// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, initializeFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByCoJjM3XcMORNZMmPfYU_91cIVL2kpVc",
  authDomain: "todo-app-react-c7fe0.firebaseapp.com",
  projectId: "todo-app-react-c7fe0",
  storageBucket: "todo-app-react-c7fe0.appspot.com",
  messagingSenderId: "596565706400",
  appId: "1:596565706400:web:f566fc894da9d8c38f2bc5",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
