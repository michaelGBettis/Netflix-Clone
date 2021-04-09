import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBRTIea5Rm5gjM3ShJ7bhs2BlZwjxWJfgc",
  authDomain: "netflix-clone-fca45.firebaseapp.com",
  projectId: "netflix-clone-fca45",
  storageBucket: "netflix-clone-fca45.appspot.com",
  messagingSenderId: "993713554403",
  appId: "1:993713554403:web:b70cf231b95a154c3956d6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
