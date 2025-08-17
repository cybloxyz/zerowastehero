import cr from "../assets/crown.svg";
import tr from "../assets/tr.svg";
import HoverBacklight from "../components/burst";
import zew from "../assets/zew.png";
import { Link } from "react-router-dom";

export default function Leaderboard() {
  const schools = [
    { name: "MAS ARRISALAH", score: 900 },
    { name: "SMA Harapan Bangsa", score: 890 },
    { name: "SMK Bumi Lestari", score: 870 },
    { name: "SMP Hijau Damai", score: 650 },
    { name: "SD Alam Raya", score: 880 },
  ];

const sortedSchools = [...schools].sort((a, b) => b.score - a.score);

  return (
    <div className="bg-lime-200 min-h-screen flex flex-col items-center py-8">
      <HoverBacklight count={8} distance={40}>
        <span className="text-4xl font-bold mb-4">🏆 Leaderboard Sekolah 🏆</span>
        </HoverBacklight>
      <h1 className="text xl font-semibold mb-4">
        terima kasih sudah ikut berkontribusi dalam menjaga bumi kita!
      </h1>

      {/* Alas putih besar */}
      <div className="bg-white rounded-xl shadow-lg p-4 w-full max-w-4xl">
        {sortedSchools.map((school, index) => (
          <div
            key={index}
            className={`flex justify-between items-center p-4 mb-2 last:mb-0 rounded-lg cursor-pointer
              transition-all duration-300 hover:scale-[1.03] hover:shadow-lg
              ${
                index === 0
                  ? "bg-yellow-200 font-bold scale-110"
                  : index === 1
                  ? "bg-gray-200 font-semibold"
                  : index === 2
                  ? "bg-orange-200 font-medium"
                  : "bg-white"
              }
            `}
          >
            <div className="flex items-center gap-2">
              {index === 0 && <img src={cr} alt="Crown" className="w-8 h-8 animate-bounce" />}
              <span>{index + 1}. {school.name}</span>
            </div>
            <span>{school.score}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-12 animate-wiggle">
        <img src={tr} alt="icon" className="w-24 h-24 object-contain"/>
      </div>
    </div>
  );
}
