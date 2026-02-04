import React from 'react';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function ProtectedRoute({ children }) {
  const { token, isInitialized } = useContext(AuthContext);

  // Show nothing until auth state is initialized
  if (!isInitialized) return null;

  if (!token) return <Navigate to="/" replace />;

  return children;
}
