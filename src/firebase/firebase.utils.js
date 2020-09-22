import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBo9GA2wXKUpHY4dQYy0yM9PtXfrZko84s",
    authDomain: "crown-clothing-pm.firebaseapp.com",
    databaseURL: "https://crown-clothing-pm.firebaseio.com",
    projectId: "crown-clothing-pm",
    storageBucket: "crown-clothing-pm.appspot.com",
    messagingSenderId: "1086575696788",
    appId: "1:1086575696788:web:78124ad5387d6013f18d81",
    measurementId: "G-K328XESS2F"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
