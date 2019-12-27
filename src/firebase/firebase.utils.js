import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD6G7RcFgTsGb7M6zkNyxs2Gh3528afHWs",
  authDomain: "crown-clothing-db-f11ab.firebaseapp.com",
  databaseURL: "https://crown-clothing-db-f11ab.firebaseio.com",
  projectId: "crown-clothing-db-f11ab",
  storageBucket: "crown-clothing-db-f11ab.appspot.com",
  messagingSenderId: "1033167665041",
  appId: "1:1033167665041:web:f71718d8d06ef431388c30",
  measurementId: "G-QELQP70GNY"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
