import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAwloYT4M91zlEgfKnrK8ajRejZ8A9PeY4",
    authDomain: "e-shop-70fa9.firebaseapp.com",
    projectId: "e-shop-70fa9",
    storageBucket: "e-shop-70fa9.appspot.com",
    messagingSenderId: "126624066590",
    appId: "1:126624066590:web:1b6f233e1befce53c6d20f",
    measurementId: "G-0PHLCD1PKR"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
