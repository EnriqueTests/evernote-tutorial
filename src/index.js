import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from "firebase";
import '@firebase/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyDduFPoquVTGLIM8NzCSoVjOCZ_17RUppE",
  authDomain: "evernote-clone-21827.firebaseapp.com",
  projectId: "evernote-clone-21827",
  storageBucket: "evernote-clone-21827.appspot.com",
  messagingSenderId: "468555826519",
  appId: "1:468555826519:web:c3af87fad1baa6c6af2a12",
  measurementId: "G-B3WWHJMS9L"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('evernote-container')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();
