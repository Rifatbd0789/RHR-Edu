import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();

export const context = createContext(null);

const Provider = ({ children }) => {
  const [user, setUser] = useState();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogIn = () => {
    return signInWithPopup(auth, provider);
  };

  const logOutUser = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unSubscribe;
  }, []);

  const authInfo = { user, createUser, logInUser, logOutUser, googleLogIn };
  return <context.Provider value={authInfo}>{children}</context.Provider>;
};

export default Provider;
