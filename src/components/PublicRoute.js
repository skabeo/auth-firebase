import React from 'react'
import { useAuth } from "../context/AuthContext";
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return children
  } else {
    return <Navigate to='/' />
  }
}

export default PublicRoute
