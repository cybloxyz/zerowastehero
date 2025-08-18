import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import HoverBacklight from '../components/burst.jsx';

export default function DashboardSekolah() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [alamat, setAlamat] = useState("Jl. Contoh No. 123, Kota Hijau");
  const [deskripsi, setDeskripsi] = useState("Sekolah ramah lingkungan yang peduli bumi.");
  const [logo, setLogo] = useState(null);
  const [editing, setEditing] = useState(false);

  // daftar siswa (sementara dummy data)
  const [siswa] = useState([
    { id: 1, name: "Ani", badge: "🌱 Level 1 - Kesadaran" },
    { id: 2, name: "Budi", badge: "♻️ Level 2 - 3 Prinsip" },
    { id: 3, name: "Cici", badge: "💡 level 3 - Inovasi" },
  ]);

  const handleLogout = () => {
    logout();
    navigate("/login-school");
  };

const handleLogoChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    const validTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (!validTypes.includes(file.type)) {
      alert("Format tidak didukung! Upload JPG, JPEG, atau PNG saja.");
      return;
    }
    setLogo(URL.createObjectURL(file));
  }
};

  return (
    <div className="min-h-screen bg-green-100 py-8">
      <div className="max-w-5xl sm:mx-auto mx-4 bg-white rounded-xl shadow-lg p-6">

       <div className="flex items-center gap-4">
  <h1 className="text-3xl font-bold">🏫 Dashboard</h1>
<HoverBacklight count={8} distance={25}>
  <h1 className="text-3xl font-bold text-lime-500">Sekolah</h1>
</HoverBacklight>
</div>

        <p className="text-gray-600 mb-6">
          Selamat datang, {user?.name || "Sekolah"}!
        </p>

        {/* Profil Sekolah */}
        <div className="flex items-center gap-6 mb-6">
          <label className="relative cursor-pointer">
            <div className="sm:w-32 sm:h-32 w-20 h-20 bg-gray-300 rounded-full overflow-hidden flex items-center justify-center">
              {logo ? (
                <img src={logo} alt="logo sekolah" className="w-full h-full object-cover" />
              ) : (
                <span className="text-xs sm:text-sm text-gray-500">Upload Logo</span>
              )}
            </div>
            {user?.role === "school" && (
              <input type="file" className="hidden" onChange={handleLogoChange} />
            )}
          </label>
          <div>
            <h2 className="sm:text-xl text-lg font-semibold">{user?.name || "Nama Sekolah"}</h2>

            {editing ? (
              <>
                <input
                  type="text"
                  value={alamat}
                  onChange={(e) => setAlamat(e.target.value)}
                  className="text-xs sm:text-sm mt-2 p-2 border rounded-lg w-full focus:ring-2 focus:ring-lime-400 outline-none"
                />
                <textarea
                  value={deskripsi}
                  onChange={(e) => setDeskripsi(e.target.value)}
                  className="text-xs sm:text-sm mt-2 p-2 border rounded-xl w-full text-gray-700 focus:ring-2 focus:ring-lime-400 outline-none"
                />
              </>
            ) : (
              <>
                <p className="text-xs sm:text-sm mt-2 text-gray-700">{alamat}</p>
                <p className="text-xs sm:text-sm mt-1 text-gray-600">{deskripsi}</p>
              </>
            )}

            {user?.role === "school" && (
              <div className="mt-2">
                {editing ? (
                  <button
                    onClick={() => setEditing(false)}
                    className="px-3 py-1 bg-green-500 text-white rounded-xl hover:bg-green-600"
                  >
                    Simpan
                  </button>
                ) : (
                  <button
                    onClick={() => setEditing(true)}
                    className="px-3 py-1 bg-gray-200 rounded-xl hover:bg-gray-300"
                  >
                    Edit
                  </button>
                )}
              </div>
            )}
            
          </div>
        </div>

        {/* Daftar Siswa */}
        <div className="bg-lime-100 p-4 rounded-xl mb-6">
          <h2 className="font-semibold mb-3">👨‍🎓 Daftar Siswa</h2>
          <ul className="space-y-2">
            {siswa.map((s) => (
              <li key={s.id} className="bg-white p-3 rounded-lg shadow flex justify-between hover:scale-105">
                <span>{s.name}</span>
                <span>{s.badge}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tombol Logout */}
        <div className="text-right">
          <button
            onClick={handleLogout}
            className="sm:px-4 sm:py-2 px-2 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
