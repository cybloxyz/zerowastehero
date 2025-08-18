import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HoverBacklight from "../components/burst.jsx";
import { useAuth } from "../context/AuthContext.jsx";

export default function LoginStudent() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // state untuk pesan error

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      login("student", email); // role = student
      navigate("/dashboard-student");
    } else {
      setError("Email & password siswa wajib diisi!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-lime-200 px-4 py-6">
      <div className="bg-white sm:p-8 p-6  rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login Siswa</h2>

        {error && (
          <p className="text-red-600 text-center mb-4 font-semibold">{error}</p>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Siswa"
            className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-lime-400 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-lime-400 outline-none"
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
                Masuk
              </button>
            </HoverBacklight>
          </div>
        </form>
      </div>
    </div>
  );
}
