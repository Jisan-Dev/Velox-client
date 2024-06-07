import { app } from '@/firebase/firebase.config';
import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        console.log('CurrentUser-->', currentUser);
      } else {
        setUser(null);
        console.log('CurrentUser-->', currentUser);
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = { user, loading, signInWithGoogle };
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
