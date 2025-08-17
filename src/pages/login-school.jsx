import HoverBacklight from "../components/burst.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginSchool() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // validasi simple, nanti bisa sambung ke backend
    if (email && password) {
      login("school", email); // role = school
      navigate("/dashboard-school");
    } else {
      alert("Email & password wajib diisi!");
    }
  };

  return (
    <div className="min-h-screen bg-lime-200 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login Sekolah</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-lime-400 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-lime-400 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          Belum punya akun?
          <a
            href="/register"
            className="text-lime-600 font-semibold hover:underline"
          >
            {" "}
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
