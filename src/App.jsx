import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
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
import VirtualTour from "./pages/virtu";
import Cal from "./pages/cal";
import Bank from "./pages/wastb";
import SplashScreen from "./pages/splash/splashscreen"; 

import Pohon from "./pages/events/pohon.jsx";
import Recycle from "./pages/events/recycle.jsx";
import EarthDay from "./pages/events/earth.jsx";
import LingkunganHidup from "./pages/events/lingkup.jsx"; 
import Air from "./pages/events/hariair.jsx"; 
import PeduliSampah from "./pages/events/pedulisampah.jsx"; 
import PenguranganBencana from "./pages/events/bencana.jsx"; 
import WorldCleanup from "./pages/events/cleanup.jsx"; 
import EarthHour from "./pages/events/earthhour.jsx";
import GunungInternasional from "./pages/events/gunung.jsx";
import Habitat from "./pages/events/habitat.jsx";
import ForestDay from "./pages/events/hutan.jsx";
import Keanekaragaman from "./pages/events/keanekaragaman.jsx";
import KonservasiAlam from "./pages/events/konservasi.jsx";
import HariLaut from "./pages/events/laut.jsx";
import OzoneDay from "./pages/events/ozon.jsx";
import AntiPlastik from "./pages/events/plasticfree.jsx";
import AnimalDay from "./pages/events/satwa.jsx";
import SungaiNasional from "./pages/events/sungai.jsx";
import TanahSedunia from "./pages/events/tanah.jsx"; 

// Wrapper supaya route '/' dinamis tergantung login
function HomeRoute() {
  const { user } = useAuth();
  if (!user) return <HomeDefault />;       // belum login
  return <HomeLoggedIn />;                 // sudah login
}

function App() {
  const [showSplash, setShowSplash] = useState(true); // state splash

  return (
    <AuthProvider>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />} 

      {!showSplash && (
        <Router>
          <Routes>
            <Route path="/" element={<HomeDefault />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/register" element={<Register />} />

            {/* login */}
            <Route path="/login-school" element={<LoginSchool />} />
            <Route path="/login-student" element={<LoginStudent />} />

            <Route path="/virtu" element={<VirtualTour />} />
            <Route path="/cal" element={<Cal />} />
            <Route path="/wastb" element={<Bank />} />

            <Route path="/events/pedulisampah" element={<PeduliSampah />} />
            <Route path="/events/air" element={<Air />} />
            <Route path="/events/earthday" element={<EarthDay />} />
            <Route path="/events/lingkup" element={<LingkunganHidup />} />
            <Route path="/events/cleanup" element={<WorldCleanup />} />

            <Route path="/events/earthhour" element={<EarthHour />} />
            <Route path="/events/laut" element={<HariLaut />} />
            <Route path="/events/konservasialam" element={<KonservasiAlam />} />
            <Route path="/events/ozon" element={<OzoneDay />} />
            <Route path="/events/pohon" element={<Pohon />} />

            <Route path="/events/keanekaragaman" element={<Keanekaragaman />} />
            <Route path="/events/habitat" element={<Habitat />} />
            <Route path="/events/sungai" element={<SungaiNasional />} />
            <Route path="/events/bencana" element={<PenguranganBencana />} />
            <Route path="/events/recycle" element={<Recycle />} />

            <Route path="/events/tanah" element={<TanahSedunia />} />
            
            <Route path="/events/animalday" element={<AnimalDay />} />
            <Route path="/events/antiplastik" element={<AntiPlastik />} />
            <Route path="/events/gunung" element={<GunungInternasional />} />
            
            <Route path="/events/forestday" element={<ForestDay />} />



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
      )}
    </AuthProvider>
  );
}

export default App;
