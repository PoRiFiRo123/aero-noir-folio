
import { Navigate } from "react-router-dom";

// This is a placeholder for your actual authentication logic.
// For now, it allows access to the protected routes.
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = true; // Replace with your actual authentication check

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
