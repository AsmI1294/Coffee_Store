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
        const fetchUser = async (retries = 3, delay = 500) => {
          try {
            const res = await fetch(
              `http://localhost:3000/user/${currentUser.email}`,
            );
            const text = await res.text();

            if (!text) {
              if (retries > 0) {
                setTimeout(() => fetchUser(retries - 1, delay * 2), delay);
                return;
              }
              // exhausted retries, no data found
              setUser({ currentUser, data: null });
              setLoading(false);
              return;
            }

            const data = JSON.parse(text);
            setUser({ currentUser, data });
            setLoading(false); // ✅ only done once we have a real answer
          } catch (err) {
            console.error(err);
            if (retries > 0) {
              setTimeout(() => fetchUser(retries - 1, delay * 2), delay);
              return;
            }
            // exhausted retries, error occurred
            setUser({ currentUser, data: null });
            setLoading(false);
          }
        };

        fetchUser();
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const userInfo = { createUser, loginUser, logOut, user, loading };

  return (
    <div>
      <AuthContext value={userInfo}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
