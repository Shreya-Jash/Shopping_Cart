import React from 'react'
import { Navigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

export default function ProtectedRoute({children}) {
    let {user} =useUserAuth();
    if(!user){
        return <Navigate to="/Login" />;
    }
  return children;
}
