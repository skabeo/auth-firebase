import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate, useLocation } from 'react-router-dom';


export default function PrivateRoute({ children }) {
  const { currentUser } = useAuth();
  const location = useLocation();
  const fromLocation = (location.state)?.from;
  const previousLocation = fromLocation || { pathname: '/login' };

  if (currentUser) {
    return children;
  } else {
    return <Navigate to={previousLocation} state={{ from: location }} replace />;
  }
}
