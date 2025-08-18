import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import HoverBacklight from '../components/burst.jsx';
import med1 from "../assets/med1.svg";


export default function DashboardSiswa() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [bio, setBio] = useState("Saya peduli lingkungan dan suka mendaur ulang barang bekas.");
  const [photo, setPhoto] = useState(null);
  const [editing, setEditing] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login-student");
  };

const handlePhotoChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    const validTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (!validTypes.includes(file.type)) {
      alert("Hanya boleh upload file JPG, JPEG, atau PNG!");
      return;
    }
    setPhoto(URL.createObjectURL(file));
  }
};


  return (
    <div className="min-h-screen bg-blue-100 py-8">
      <div className="max-w-4xl sm:mx-auto mx-4 bg-white rounded-xl shadow-lg p-6">

         <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold">🏫 Dashboard</h1>
        <HoverBacklight count={8} distance={25}>
          <h1 className="text-3xl font-bold text-sky-500">Siswa</h1>
        </HoverBacklight>
        </div>
        <p className="text-gray-600 mb-6">
          Halo, {user?.name || "Siswa"}, siap kontribusi?
        </p>


        {/* Foto + Bio */}
        <div className="flex items-center justify-start gap-6 mb-6">
          <label className="relative cursor-pointer">
            <div className="sm:w-32 sm:h-32 w-20 h-20 bg-gray-300 rounded-full overflow-hidden flex items-center justify-center">
              {photo ? (
                <img src={photo} alt="profil" className="w-full h-full object-cover" />
              ) : (
                <span className="sm:text-sm text-xs text-gray-500">Upload Foto</span>
              )}
            </div>
            {user?.role === "student" && (
              <input type="file" className="hidden" onChange={handlePhotoChange} />
            )}
          </label>
          <div>
            <h2 className="text-sm sm:text-xl font-semibold">{user?.name || "Nama Siswa"}</h2>
            <p className="text-gray-500 text-sm sm:text-sm">Email: {user?.email || "email@example.com"}</p>

            {editing ? (
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="text-xs sm:text-sm mt-2 p-2 border rounded-xl w-80 text-gray-700 focus:ring-2 focus:ring-sky-400 outline-none"
              />
            ) : (
              <p className="text-sm sm:text-lg mt-2 text-gray-700">{bio}</p>
            )}

            {user?.role === "student" && (
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
     
          <div className="items-center justify-center start-6">
            <img 
              src={med1}
              alt="badge"
              className="relative flex justify-between gap-8mt-6 w-32 h-32 hover:scale-125 transition-transform transition-duration-600"
            />
          </div>
       
        </div>
     

        {/* Badge */}
<div className="bg-sky-200 p-4 rounded-xl mb-6">
  <h2 className="font-semibold mb-3 sm:text-lg text-sm">🏅 A Bit of Me</h2>
  <div className="grid grid-cols-4 gap-2">
    
    <button className="bg-white sm:w-48 sm:h-16 w-22 h-12 p-2 text-xs sm:text-sm rounded-xl shadow text-center hover:scale-105 transition-transform">
      🌱 Level 1
    </button>

    <button className="bg-white sm:w-48 sm:h-16 w-22 h-12 p-2 text-xs sm:text-sm rounded-xl shadow text-center hover:animate-wiggle transition-transform">
      ♻️ sharing
    </button>

    <HoverBacklight count={8} distance={60}>
      <button className="bg-white sm:w-48 sm:h-16 w-22 h-12 p-2 text-xs sm:text-sm rounded-xl shadow text-center hover:scale-105 transition-transform">
        💡 Inovasi
      </button>
    </HoverBacklight>
    <button className="bg-white sm:w-48 sm:h-16 w-22 h-12 p-2 text-xs sm:text-sm rounded-xl shadow text-center hover:animate-wiggle transition-transform">
      get to know!
    </button>
    
  </div>
</div>

<div className="bg-sky-200 p-4 rounded-xl sm:mb-6 mb-3 -center">
  <h2 className="font-semibold mb-3 mt-2">
   🏅 Badge & Pencapaian 🏅
   </h2>
   <div className="sm:mx-8 grid grid-cols-4 sm:grid-row-2 sm:gap-2 gap-1">
      <div className="bg-white sm:w-36 sm:h-36 w-16 h-16 p-2 rounded-2xl mb-3 mt-3"></div>
      <div className="bg-white sm:w-36 sm:h-36 w-16 h-16 p-2 rounded-2xl mb-3 mt-3"></div>
      <div className="bg-white sm:w-36 sm:h-36 w-16 h-16 p-2 rounded-2xl mb-3 mt-3"></div>
      <div className="bg-white sm:w-36 sm:h-36 w-16 h-16 p-2 rounded-2xl mb-3 mt-3"></div>
      <div className="bg-white sm:w-36 sm:h-36 w-16 h-16 p-2 rounded-2xl mb-3 mt-3"></div>
      <div className="bg-white sm:w-36 sm:h-36 w-16 h-16 p-2 rounded-2xl mb-3 mt-3"></div>
      <div className="bg-white sm:w-36 sm:h-36 w-16 h-16 p-2 rounded-2xl mb-3 mt-3"></div>
      <div className="bg-white sm:w-36 sm:h-36 w-16 h-16 p-2 rounded-2xl mb-3 mt-3"></div>
      <div className="bg-white sm:w-36 sm:h-36 w-16 h-16 p-2 rounded-2xl mb-3 mt-3"></div>
      <div className="bg-white sm:w-36 sm:h-36 w-16 h-16 p-2 rounded-2xl mb-3 mt-3"></div>
      <div className="bg-white sm:w-36 sm:h-36 w-16 h-16 p-2 rounded-2xl mb-3 mt-3"></div>
      <div className="bg-white sm:w-36 sm:h-36 w-16 h-16 p-2 rounded-2xl mb-3 mt-3"></div>
   </div>
</div>


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
