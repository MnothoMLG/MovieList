// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC6AoH-1I-IiI45kaoyEYfgQu_FRhfAM8A',
  authDomain: 'authentication-ae8ef.firebaseapp.com',
  databaseURL: 'https://authentication-ae8ef.firebaseio.com',
  projectId: 'authentication-ae8ef',
  storageBucket: 'authentication-ae8ef.appspot.com',
  messagingSenderId: '482491186718',
  appId: '1:482491186718:web:7a407f373d1aea61c4780f',
};

// Initialize Firebase
export const FirbaseAppConfig = initializeApp(firebaseConfig);
