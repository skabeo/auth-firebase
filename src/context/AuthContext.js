import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateEmail, updatePassword } from 'firebase/auth';


const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true)

  const signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
  }

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
  }

  const logout = () => {
    signOut(auth)
  }
  
  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email)
  }

  const updateUserEmail = (email) => {
    updateEmail(currentUser, email)
  }

  const updateUserPassword = (password) => {
    updatePassword(currentUser, password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    updateUserEmail,
    updateUserPassword,
  }
  return (
    <AuthContext.Provider value={value}>
      {loading && <p>Loading...</p>}
      {!loading && children}
    </AuthContext.Provider>
  )
}

export default AuthProvider