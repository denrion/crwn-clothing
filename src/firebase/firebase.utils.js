import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyBjjuUjBYiJNBGM3ip24B5IWkmYSdp4juA',
  authDomain: 'crwn-db-cebeb.firebaseapp.com',
  databaseURL: 'https://crwn-db-cebeb.firebaseio.com',
  projectId: 'crwn-db-cebeb',
  storageBucket: 'crwn-db-cebeb.appspot.com',
  messagingSenderId: '509019066394',
  appId: '1:509019066394:web:7daca8d0b259638ccd81a3',
  measurementId: 'G-KP3ZDY5YTM'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
