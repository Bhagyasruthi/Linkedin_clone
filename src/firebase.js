import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB55dEQQPNDzwngZOZtSQrdL_gPjBf6Gi4",
  authDomain: "linkedin-clone-2d762.firebaseapp.com",
  projectId: "linkedin-clone-2d762",
  storageBucket: "linkedin-clone-2d762.appspot.com",
  messagingSenderId: "635050270846",
  appId: "1:635050270846:web:d1a2ed0af4ba6bf426f82f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
