import { createContext, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/messaging";
export const FirebaseContext = createContext();

const FirebaseProvider = ({ children }) => {
  firebase.initializeApp({
    apiKey: "AIzaSyBQkMburG7m541Eg0XQ_J4OugCjxC5BKpU",
    authDomain: "frontend-chat-417f3.firebaseapp.com",
    databaseURL: "https://frontend-chat-417f3-default-rtdb.firebaseio.com",
    projectId: "frontend-chat-417f3",
    storageBucket: "frontend-chat-417f3.appspot.com",
    messagingSenderId: "989674906370",
    appId: "1:989674906370:web:1247c7aa54e1ebf7aad81b",
    measurementId: "G-HCGEVQS6P7",
  });
  const auth = firebase.auth();
  const firestore = firebase.firestore();

  const userCollection = firestore.collection("users");
  const messagesCollection = firestore.collection("messages");

  return (
    <FirebaseContext.Provider
      value={{ firebase, auth, userCollection, messagesCollection }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
