// UserContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.config";
 // import your db

export const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const userId = window.localStorage.getItem("userId");

  // Function to fetch user data
  const fetchUserData = async (uid) => {
    try {
      setLoading(true);
      const userRef = doc(db, "users", userId); // assuming collection name = 'users'
      const snap = await getDoc(userRef);

      if (snap.exists()) {
        setUserData(snap.data());
        console.log(snap.data());
      } else {
        setUserData(null);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    } finally {
      setLoading(false);
    }
  };

  // Optionally auto-fetch when uid changes
  // useEffect(() => {
  //   if (currentUser?.uid) fetchUserData(currentUser.uid);
  // }, [currentUser]);

  useEffect(()=>{
    fetchUserData();
  },[])

  return (
    <UserDataContext.Provider value={{ userData, loading, fetchUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};
