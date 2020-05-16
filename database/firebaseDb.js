import * as firebase from 'firebase';
import firestore from 'firebase/firestore';
var firebaseConfig = {
  apiKey: "AIzaSyCWGbKuE3COAMuuWnE0csMyGvPy2R-MsuA",
  authDomain: "myreactnativeapp-db2f7.firebaseapp.com",
  databaseURL: "https://myreactnativeapp-db2f7.firebaseio.com",
  projectId: "myreactnativeapp-db2f7",
  storageBucket: "myreactnativeapp-db2f7.appspot.com",
  messagingSenderId: "884422815097",
  appId: "1:884422815097:web:18559ed12c2b4ab36513a8",
  measurementId: "G-1TDXJC3XXF"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;