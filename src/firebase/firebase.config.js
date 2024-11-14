// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDrDWSsF_TBMR6CV9uyn_u68YjMWs1SA1k',
  authDomain: 'react-conceptiual-1.firebaseapp.com',
  projectId: 'react-conceptiual-1',
  storageBucket: 'react-conceptiual-1.firebasestorage.app',
  messagingSenderId: '803924394905',
  appId: '1:803924394905:web:32f8b1b8fdac21f9acc908',
  measurementId: 'G-RHSD4GGC8K',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
