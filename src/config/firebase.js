

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";




const firebaseConfig = {

    apiKey: "AIzaSyB0z-ONAf6swc9rRoA0INO6ywEAqSSBd6I",

    authDomain: "juan-ballarino-architect.firebaseapp.com",

    projectId: "juan-ballarino-architect",

    storageBucket: "juan-ballarino-architect.appspot.com",

    messagingSenderId: "588289151228",

    appId: "1:588289151228:web:6317d53e7365b2ca758779",

    measurementId: "G-QJRL3V5BJM"

};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);