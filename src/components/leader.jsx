import fire from "../assets/fire.svg";

export default function Top({ rank, name, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-white rounded-xl mt-8 h-40 w-full flex items-center justify-between px-6 shadow hover:scale-110 transition-transform focus:outline-none"
    >
      {/* Nomor Ranking di kiri */}
      <span className="text-8xl font-bold">#{rank}</span>

      {/* Nama Sekolah di tengah */}
      <span className="text-5xl font-semibold text-center flex-1">
        {name}
      </span>

      {/* Ikon Api di kanan */}
      {rank === 1 && (
        <img
          src={fire}
          alt="lead"
          className="w-20 h-20 animate-wiggle"
        />
      )}
    </button>
  );
}
