import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Leaderboard from "./pages/leaderboard";
import Register from "./pages/register";
import Login from "./pages/login-school";        // login sekolah
import Stud from "./pages/login-student";    // login siswa
import DashboardSchool from "./pages/dashboard-school";
import DashboardStudent from "./pages/dashboard-student";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login-school" element={<Login />} />
          <Route path="/login-student" element={<Stud />} />

          {/* dashboard sekolah */}
          <Route
            path="/dashboard-school"
            element={
              <ProtectedRoute role="school">
                <DashboardSchool />
              </ProtectedRoute>
            }
          />

          {/* dashboard siswa */}
          <Route
            path="/dashboard-student"
            element={
              <ProtectedRoute role="student">
                <DashboardStudent />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
