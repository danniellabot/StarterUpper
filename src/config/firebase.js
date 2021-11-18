import firebase from 'firebase/app';
//import firebase from '@react-native-firebase/app';
import "firebase/firestore";
//import firestore from '@react-native-firebase/firestore'
//import authentication from '@react-native-firebase/auth';
import 'firebase/auth';



let Firebase;

if (firebase.apps.length === 0) {
  Firebase = firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore()

export {Firebase, db, auth};
