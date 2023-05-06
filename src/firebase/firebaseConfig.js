import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCbMOkpWC956XLWUTGw-Iki8SOXF3gzGEI',
  authDomain: 'marie-nutri-app-d3211.firebaseapp.com',
  projectId: 'marie-nutri-app-d3211',
  storageBucket: 'marie-nutri-app-d3211.appspot.com',
  messagingSenderId: '233354107182',
  appId: '1:233354107182:web:23355846e5ac7c80ca02bf',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
