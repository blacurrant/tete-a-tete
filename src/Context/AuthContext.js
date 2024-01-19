import React, { useEffect, useState, createContext } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase';

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState({})
    
    useEffect(() => {
      const unSub = onAuthStateChanged(auth, (user) => {
        setUser(user);
        console.log("welcome "+ user.displayName );
      });

      return (() => {
        unSub();
      }); 
    }, []);
    
  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};


