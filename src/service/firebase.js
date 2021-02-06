import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBXTTR5uk2qfCOOjNs96kT3xboVdJxxMKM",
  authDomain: "pokemon-game-f1cd5.firebaseapp.com",
  databaseURL: "https://pokemon-game-f1cd5-default-rtdb.firebaseio.com",
  projectId: "pokemon-game-f1cd5",
  storageBucket: "pokemon-game-f1cd5.appspot.com",
  messagingSenderId: "741711014630",
  appId: "1:741711014630:web:12004543300bfcd8e92927"
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = fire.database();

export default database;
