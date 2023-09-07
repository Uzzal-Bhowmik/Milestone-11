import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext("default-value");
const auth = getAuth(app);

// google provider
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "uzzal" });
  const [isLoading, setIsLoading] = useState(true);

  // sign up
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign out
  const logOut = () => {
    return signOut(auth);
  };

  // google sign in
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // state observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const value = { user, isLoading, signIn, signUp, logOut, googleSignIn };
  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
