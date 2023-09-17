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
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in
  const signIn = (email, password) => {
    setIsLoading(true);
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

      // if logged in request for a token and set to localstorage
      if (currentUser) {
        const loggedInUser = { email: currentUser.email };

        fetch("https://volunteer-network-server-ppid.onrender.com/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loggedInUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("volunteer-network-jwt-token", data.token);
          });
      }
      // if logged out remove the token from localstorage
      else {
        localStorage.removeItem("volunteer-network-jwt-token");
      }
    });

    return () => unsubscribe();
  }, []);

  const value = {
    user,
    isLoading,
    signIn,
    signUp,
    logOut,
    googleSignIn,
    setIsLoading,
  };
  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
