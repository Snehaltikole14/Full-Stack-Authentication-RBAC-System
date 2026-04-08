import { Navigate } from "react-router-dom";
import { getToken } from "../auth/auth";

export default function ProtectedRoute({ children }: any) {
  const token = getToken();
  return token ? children : <Navigate to="/login" />;
}
