import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';


// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBQWLccWn6cDd6fUWpX_FGcG3_XCXfHN9o",
    authDomain: "pseudogram-6f692.firebaseapp.com",
    databaseURL: "https://pseudogram-6f692.firebaseio.com",
    projectId: "pseudogram-6f692",
    storageBucket: "pseudogram-6f692.appspot.com",
    messagingSenderId: "805912808495",
    appId: "1:805912808495:web:46d3cd6524ac2cf3efcada",
    measurementId: "G-HTJ8VQMS87"
});

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
