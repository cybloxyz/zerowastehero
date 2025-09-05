import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomeDefault from "./pages/Home";
import HomeLoggedIn from "./pages/Homel";
import Leaderboard from "./pages/leaderboard";
import Register from "./pages/register";
import LoginSchool from "./pages/login-school";
import LoginStudent from "./pages/login-student";
import DashboardSchool from "./pages/dashboard-school";
import DashboardStudent from "./pages/dashboard-student";
import { AuthProvider, useAuth } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

// Wrapper supaya route '/' dinamis tergantung login
function HomeRoute() {
  const { user } = useAuth();
  if (!user) return <HomeDefault />;       // belum login
  return <HomeLoggedIn />;                 // sudah login
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/register" element={<Register />} />

          {/* login */}
          <Route path="/login-school" element={<LoginSchool />} />
          <Route path="/login-student" element={<LoginStudent />} />

          {/* dashboard */}
          <Route
            path="/dashboard-school"
            element={
              <ProtectedRoute role="school">
                <DashboardSchool />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard-student"
            element={
              <ProtectedRoute role="student">
                <DashboardStudent />
              </ProtectedRoute>
            }
          />

          {/* fallback */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
