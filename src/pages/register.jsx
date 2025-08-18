import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HoverBacklight from "../components/burst.jsx";

export default function Register() {
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const namaSekolah = formData.get("namaSekolah");
    const email = formData.get("email");
    const password = formData.get("password");

    console.log({ namaSekolah, email, password });

    setSuccess(true);
    e.target.reset();
  };

  const handleLoginClick = () => {
    navigate("/login-school");
  };

  return (
    <div className="min-h-screen bg-lime-200 flex items-center justify-center px-4 py-6">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-md p-6 sm:p-10 flex flex-col">
        <h2 className="text-3xl font-bold text-center mb-8">Daftar Sekolah</h2>

        {success ? (
          <div className="text-center space-y-6">
            <p className="text-green-600 font-semibold text-lg">
              Berhasil daftar, silahkan login
            </p>
            <button
              onClick={handleLoginClick}
              className="w-full bg-lime-500 text-white py-3 rounded-xl font-semibold text-lg hover:bg-lime-600 transition"
            >
              Login Sekarang
            </button>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              name="namaSekolah"
              type="text"
              placeholder="Nama Sekolah"
              className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-lime-400 focus:border-lime-400 outline-none text-lg"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-lime-400 focus:border-lime-400 outline-none text-lg"
              required
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-lime-400 focus:border-lime-400 outline-none text-lg"
              required
            />

            <div className="text-center">
              <HoverBacklight count={8} distance={25}>
                <button
                  type="submit"
                  className="w-24 sm:w-48 bg-lime-500 text-white py-3 rounded-xl font-semibold text-lg hover:bg-lime-600 transition"
                >
                  Register
                </button>
              </HoverBacklight>
            </div>
          </form>
        )}

        {!success && (
          <p className="text-center mt-6 text-sm sm:text-base">
            Sudah punya akun?{" "}
            <button
              onClick={handleLoginClick}
              className="text-lime-600 font-semibold hover:underline"
            >
              Masuk
            </button>
          </p>
        )}
      </div>
    </div>
  );
}
