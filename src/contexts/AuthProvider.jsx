import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser?.email) {
        const fetchUser = async () => {
          try {
            const res = await fetch(
              `http://localhost:3000/user/${currentUser.email}`,
            );
            if (!res.ok) throw new Error("Failed to fetch user data");
            const data = await res.json();
            setUser({ currentUser, data });
            setLoading(false);
          } catch (err) {
            console.error(err);
            setUser({ currentUser, data: null }); // optional fallback
          }
        };
        fetchUser();
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const userInfo = { createUser, loginUser, logOut, user, loading };

  return (
    <div>
      <AuthContext value={userInfo}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
