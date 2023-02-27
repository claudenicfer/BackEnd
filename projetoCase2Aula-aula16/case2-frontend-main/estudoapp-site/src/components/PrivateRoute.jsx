import { Route, Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  // localStorage.clear();
  const isAuthenticated = localStorage.getItem("token");

  console.log(isAuthenticated);

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}
