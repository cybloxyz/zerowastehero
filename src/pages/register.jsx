import { useState } from "react";
import HoverBacklight from "../components/burst.jsx";

export default function Register() {
  const [success, setSuccess] = useState(false); // state untuk pesan sukses

  const handleSubmit = (e) => {
    e.preventDefault(); // mencegah reload halaman

    // ambil data input
    const formData = new FormData(e.target);
    const namaSekolah = formData.get("namaSekolah");
    const email = formData.get("email");
    const password = formData.get("password");

    // sementara hanya log data
    console.log({ namaSekolah, email, password });

    // set success ke true untuk menampilkan pesan
    setSuccess(true);

    // opsional: reset form
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-lime-200 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Daftar Sekolah</h2>
        
        {success ? (
          <p className="text-green-600 text-center font-semibold">
            Berhasil daftar, silahkan login
          </p>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input 
              name="namaSekolah"
              type="text" 
              placeholder="Nama Sekolah" 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-lime-400 outline-none"
              required
            />
            <input 
              name="email"
              type="email" 
              placeholder="Email" 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-lime-400 outline-none"
              required
            />
            <input 
              name="password"
              type="password" 
              placeholder="Password" 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-lime-400 outline-none"
              required
            />

            <div className="mt-8 text-center">
              <HoverBacklight count={8} distance={30}>
                <button 
                  type="submit" 
                  className="w-24 bg-lime-500 text-white py-2 rounded-lg font-semibold hover:bg-lime-600 transition"
                >
                  Register
                </button>
              </HoverBacklight>
            </div>
          </form>
        )}

        <p className="text-sm text-center mt-4">
          Sudah punya akun? 
          <a href="/login-school" className="text-lime-600 font-semibold hover:underline"> Login</a>
        </p>
      </div>
    </div>
  );
}
