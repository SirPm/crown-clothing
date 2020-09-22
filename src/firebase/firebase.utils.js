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


export const createUserProfileDocument = async ( userAuth, additionalProperties ) => {

    if(!userAuth) {return}

    /**
     calling firestore.doc() or firestore.collection() returns a document or collection 
     reference (usually an object) but not the 
     actual data from the firstore database. to get the actual data we call either a 
     get,set,update,or delete method on the document or collection reference which will
     return a document or collection snapshot(an object) the snapshot then contains the data
    **/
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    // await because we're fetching from the firstore database
    const snapShot = await userRef.get();

    // check if the snapShot doesn't exist in our firestore database
    // by checking the exists property on the snapshot object which could be either true or false
    // if it is false i.e doesn't exist, create a new user from the document reference a.k.a userRef
    if(!snapShot.exists) {
        // destructure the displayName and email property from the userAuth object gotten from firebase
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalProperties
            })
        } catch (error) {
            console.log('error creating new user', error)
        }
    }
    return userRef;
}


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
