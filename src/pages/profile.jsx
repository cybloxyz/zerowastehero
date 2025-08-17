import unionShape from "../assets/union.svg"; // bentuk union kamu
import badgeIcon from "../assets/badge.svg";  // contoh icon badge

export default function ProfilePage() {
  return (
    <div className="bg-lime-300 min-h-screen flex flex-col items-center p-6">

      {/* Union + lingkaran */}
      <div className="relative w-[300px]">
        {/* union shape */}
        <img src={unionShape} alt="union" className="w-full h-auto" />

        {/* lingkaran ditumpuk */}
        <div className="absolute -top-6 left-4 w-32 h-32 bg-white rounded-full border-4 border-lime-300"></div>
      </div>

      {/* Bagian dalam union (content box) */}
      <div className="bg-white w-[300px] h-64 rounded-b-xl mt-[-40px] p-4 shadow">
        {/* isi konten union */}
      </div>

      {/* Judul */}
      <div className="bg-white mt-6 px-6 py-2 rounded-xl shadow text-center font-bold">
        BADGE & ACHIEVEMENT
      </div>

      {/* Grid Badge */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="relative w-20 h-20 bg-white rounded-xl shadow flex items-center justify-center">
            <img src={badgeIcon} alt="badge" className="w-10 h-10 opacity-70" />
            <span className="absolute bottom-1 text-xs font-bold">Lv {i+1}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
