import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { firebaseConfig } from "./config";

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);

export const userProfile = async (userAuth, Data) => {
  if (!userAuth) return;
  const { uid } = userAuth;

  const userReference = firestore.doc(`users/${uid}`);
  const snapshot = await userReference.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const timestamp = new Date();
    const Roles = ["user"];

    try {
      await userReference.set({
        displayName,
        email,
        createdDate: timestamp,
        Roles,
        ...Data,
      });
    } catch (err) {}
  }

  return userReference;
};
