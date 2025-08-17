import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {
  const { user } = useAuth();

  // kalau belum login
  if (!user) {
    return <Navigate to="/Home" />; // default ke login siswa
  }

  // kalau role tidak sesuai
  if (role && user.role !== role) {
    return <Navigate to="/" />; // lempar balik ke home
  }

  return children;
}
