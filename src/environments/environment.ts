export const environment = {
  firebase: {
    projectId: 'cs230-f05ab',
    appId: '1:927609204020:web:45aae03aa87ec83e600961',
    databaseURL: 'https://cs230-f05ab-default-rtdb.firebaseio.com',
    storageBucket: 'cs230-f05ab.appspot.com',
    apiKey: 'AIzaSyCPBI9tZomw7vqQ3f4htJBBMb2lyrEFLMg',
    authDomain: 'cs230-f05ab.firebaseapp.com',
    messagingSenderId: '927609204020',
    measurementId: 'G-YE6N8FET7R',
  }, production: false};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPBI9tZomw7vqQ3f4htJBBMb2lyrEFLMg",
  authDomain: "cs230-f05ab.firebaseapp.com",
  databaseURL: "https://cs230-f05ab-default-rtdb.firebaseio.com",
  projectId: "cs230-f05ab",
  storageBucket: "cs230-f05ab.appspot.com",
  messagingSenderId: "927609204020",
  appId: "1:927609204020:web:45aae03aa87ec83e600961",
  measurementId: "G-YE6N8FET7R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


