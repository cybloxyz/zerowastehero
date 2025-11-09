export default function EarthDay() {
  return (
    <div className="min-h-screen bg-blue-200 flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-3xl p-10 shadow-xl max-w-3xl text-center">

        <h1 className="text-5xl font-bold text-lime-700 mb-4 sporta">
          🌎 Hari Bumi — 22 April
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Hari Bumi diperingati untuk meningkatkan kesadaran tentang pentingnya menjaga planet.
        </p>

        {/* nanti bisa ada interaksi di sini */}
        {/* contoh: hitung jejak karbon, mini game, kuis */}
        <div className="mt-6">
          <button className="px-6 py-3 bg-lime-500 hover:bg-lime-600 text-white text-lg rounded-xl transition">
            Mulai interaksi
          </button>
        </div>

      </div>
    </div>
  );
}
