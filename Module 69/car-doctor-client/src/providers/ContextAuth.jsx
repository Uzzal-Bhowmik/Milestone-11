import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext("default-value");
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const ContextAuth = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google sign in
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  //state observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);

      if (currentUser?.email) {
        const signedUser = { email: currentUser.email };

        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("car-doctor-access-token", data.token);
          });
      } else {
        localStorage.removeItem("car-doctor-access-token");
      }
    });
    return () => unsubscribe();
  }, []);

  const value = { user, isLoading, signUp, signIn, googleSignIn, logOut };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default ContextAuth;
