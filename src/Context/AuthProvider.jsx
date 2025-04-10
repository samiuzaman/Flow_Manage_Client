import {
  GoogleAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import auth from "../Firebase/firebase.init";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [successMessage, setSuccessMessage] = useState();
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  // Login With Google
  const googleProvider = new GoogleAuthProvider();
  const handleSigninGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Login with Twitter
  const twitterProvider = new TwitterAuthProvider();
  const handleSigninTwitter = () => {
    setLoading(true);
    return signInWithPopup(auth, twitterProvider);
  };

  // Create New User
  const handleCreateAccount = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign In with Email & Password
  const handleSigninEmailPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign Out User
  const handleSignOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Profile Update
  const handleProfileUpdate = (updatedData) => {
    const { displayName, photoURL } = updatedData;
    setUser((prev) => {
      return {
        ...prev,
        displayName,
        photoURL,
      };
    });
    return updateProfile(auth.currentUser, updatedData);
  };

  // Reset Password
  const handleResetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // Login retention function
  // useEffect(() => {
  //   const unsubcribe = onAuthStateChanged(auth, async (currentUser) => {
  //     if (currentUser?.email) {
  //       setUser(currentUser);
  //       const user = { email: currentUser?.email };
  //       const { data } = await axios.post(
  //         `${import.meta.env.VITE_API_URL}/jwt`,
  //         user,
  //         {
  //           withCredentials: true,
  //         }
  //       );
  //       console.log(data);

  //       setLoading(false);
  //     } else {
  //       setUser(currentUser);

  //       const { data } = await axios.get(
  //         `${import.meta.env.VITE_API_URL}/logout`,
  //         { withCredentials: true }
  //       );
  //       console.log(data);
  //     }
  //     setLoading(false);
  //   });

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubcribe();
    };
  }, []);

  const info = {
    user,
    setUser,
    errorMessage,
    setErrorMessage,
    successMessage,
    setSuccessMessage,
    loading,
    setLoading,
    handleSigninGoogle,
    handleSigninTwitter,
    handleCreateAccount,
    handleSigninEmailPassword,
    handleSignOut,
    handleProfileUpdate,
    handleResetPassword,
  };

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
