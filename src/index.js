import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import App from './App';
import { FirebaseContext } from './context/firebase';


const config = {
    apiKey: "AIzaSyCBfPUggYfts1IH9jVJLYi6_zU3dtFNuqY",
    authDomain: "netflix-a5ceb.firebaseapp.com",
    databaseURL: "https://netflix-a5ceb.firebaseio.com",
    projectId: "netflix-a5ceb",
    storageBucket: "netflix-a5ceb.appspot.com",
    messagingSenderId: "420396607824",
    appId: "1:420396607824:web:9920406932de9ea2c7e455"
}

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
    <>
        <FirebaseContext.Provider value={{ firebase: window.firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </>,
    document.getElementById('root')
);
