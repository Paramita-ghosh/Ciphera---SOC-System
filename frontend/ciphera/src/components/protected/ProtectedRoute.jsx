import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export default function ProtectedRoute({ children, roles = [] }) {
  const { user, loading } = useContext(UserContext);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  if (!user) {
    // not logged in
    return <Navigate to="/" replace />;
  }

  if (roles.length && !roles.includes(user.role)) {
    // user not authorized for this route
    return <Navigate to="/" replace />;
  }

  return children;
}
