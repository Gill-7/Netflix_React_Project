import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
import seedDatabase from '../seed';

const config = {
    apiKey: "AIzaSyDPLvFTq2mr1dh3GuCgC0KZY0R63aF6nuo",
    authDomain: "netflix-pro-f8857.firebaseapp.com",
    databaseURL: "https://netflix-pro-f8857-default-rtdb.firebaseio.com",
    projectId: "netflix-pro-f8857",
    storageBucket: "netflix-pro-f8857.appspot.com",
    messagingSenderId: "989562065285",
    appId: "1:989562065285:web:ddbe80de805178977d34ec",
    measurementId: "G-HPDJD6H0X5"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };