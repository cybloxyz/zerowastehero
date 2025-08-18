import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HoverBacklight from "../components/burst.jsx";
import { useAuth } from "../context/AuthContext.jsx";

export default function LoginSchool() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // state untuk pesan error

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      login("school", email); // role = school
      navigate("/dashboard-school");
    } else {
      setError("Email & password wajib diisi!");
    }
  };

  return (
    <div className="min-h-screen bg-lime-200 flex items-center justify-center px-4 py-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login Sekolah</h2>

        {error && (
          <p className="text-red-600 text-center mb-4 font-semibold">{error}</p>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-lime-400 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-lime-400 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="mt-8 text-center">
            <HoverBacklight count={8} distance={30}>
              <button
                type="submit"
                className="w-20 bg-lime-500 text-white py-2 rounded-lg font-semibold hover:bg-lime-600 transition"
              >
                Login
              </button>
            </HoverBacklight>
          </div>
        </form>

        <p className="text-sm text-center mt-4">
          Belum punya akun?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-lime-600 font-semibold hover:underline"
          >
            Daftar
          </button>
        </p>
      </div>
    </div>
  );
}
