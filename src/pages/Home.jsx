import SearchBar from "../components/searchbar.jsx";
import Top from "../components/leader.jsx";
import stk from "../assets/strike.svg";
import zew from "../assets/zew.png";
import cal from "../assets/calend.svg";
import rrr from "../assets/3r.svg";
import bin from "../assets/trashbin.svg";
import cas from "../assets/castle.svg";
import mon from "../assets/money.svg";
import HoverBacklight from '../components/burst.jsx';
import HoverComment from '../components/hovercomm.jsx';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

function Model({ url }) {
  const { scene, animations } = useGLTF(url);
  const { actions, mixer } = useAnimations(animations, scene);

  useEffect(() => {
    const animNames = Object.keys(actions);
    if (animNames.length > 0) {
      actions[animNames[0]].play();
    }
    return () => mixer.stopAllAction();
  }, [actions, mixer]);

  return <primitive object={scene} scale={2} position={[0, -2, 1.5]} />;
}

export default function Home() {
  const navigate = useNavigate();

  const items = [
    { icon: cal, title: "GreenCalendar", desc: "sini lihat kalendar, ada hari bersih apa aja ya?" },
    { icon: rrr, title: "Inovate!", desc: "aaaaaaaaaaaainovasi apa aja ya? sini merapat!" },
    { icon: bin, title: "TrashBin", desc: "aaaaaaaaaaaaaaaaaabbbbbbbbbbbbbccccccc" },
    { icon: cas, title: "VirtualTour", desc: "yuk bersaing antar sekolah secara sehat! lihat sekolah lain secara virtual disini!" },
    { icon: mon, title: "Waste-Bank", desc: "aaaaaaaaaabbbbbbbbbbbbbbbbbbbccccccccccccccc" },
  ];

  const dailyStatus = [true, false, false, true, false, true, true];

  return (
    <div className="bg-lime-200 min-h-screen">
      {/* Navbar */}
      <nav className="relative flex justify-between items-center px-6 py-4 bg-white shadow">

    <HoverBacklight count={8} distance={40}>
        <div className="font-bold text-4xl text-lime-800">
          The Zero-Waste Hero 🌱
          </div>
        </HoverBacklight>

    <div className="flex gap-4">

      <Link to="/login-student">
        <button className="bg-white border-2 w-20 h-12 rounded-3xl text-l font-bold hover:scale-110">
          Siswa
        </button>
      </Link>

      <Link to="/login-school">
        <button className="bg-white border-2 border-lime-500 w-20 h-12 rounded-3xl text-l font-semibold hover:scale-110">
          Masuk
        </button>
      </Link>

      <Link to="/register">
        <button className="bg-lime-300 w-24 h-12 rounded-3xl text-l font-bold hover:scale-110">
          Daftar
        </button>
      </Link>
      
        </div>
    </nav>

    <HoverComment comment="kritik, saran dan pertanyaan!">
      <button className="fixed mx-8 mt-3 hover:scale-125 z-50 transition-transform">
        <img
          src={zew}
          alt="FaQ"
          itemType="button"
          className="w-24 h-24 items-center animate-wiggle transition-transform"
        />
      </button>
</HoverComment>

      <div className="max-w-5xl mx-auto p-4">
        {/* Search */}
        <SearchBar onSearch={(q) => alert(`Cari: ${q}`)} />

        {/* Banner */}
        <div className="relative bg-white mt-4 rounded-xl h-80 flex items-center p-4">
          {/* 3D Model */}
          <HoverComment comment="kenalin aku ZEWRO!">
            <div className="w-72 h-72 cursor-pointer">
              <Canvas className="w-full h-full">
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 10]} />
                <Model url="/models/ImageToStl.com_Animation_Agree_Gesture_withSkin.glb" />
                <OrbitControls enableZoom={false} />
              </Canvas>
            </div>
          </HoverComment>

          {/* Text */}
          <div className="w-2/3 pl-4 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-2 text-lime-600">Ayo Zero-Waste Heroes!</h2>
            <p className="text-base">
              Setiap sampah yang kamu pilah, setiap plastik yang kamu hindari, membuat dunia lebih bersih. Ayo, jadi pahlawan lingkungan sekarang!
            </p>
            <p className="mt-1 text-base font-semibold text-red-600">
              "Aksi Kecil untuk Perubahan Besar"
            </p>
          </div>
        </div>
        

        {/* Kategori */}
        <div className="relative bg-white mt-6 p-4 rounded-xl shadow flex justify-center gap-12 overflow-x-auto">
          {["day 1", "day 2", "day 3", "day 4", "day 5", "day 6", "day 7"].map((item, i) => (
            <div key={i} className="flex flex-col items-center flex-shrink-0">
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center 
                ${dailyStatus[i] ? 'bg-orange-500' : 'bg-gray-300'}`}
              >
                <img src={stk} alt="streak icon" className="w-14 h-14 hover:scale-125" />
              </div>
              <span className="text-base mt-3 font-medium">{item}</span>
            </div>
          ))}
        </div>

        {/* Fitur unggulan */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <HoverComment comment="semua dimulai dari mimpi, kamu bisa kontribusi dan upayakan hasil nyata!">
            <div className="bg-sky-400 rounded-xl p-4 text-white hover:bg-sky-600 transition-colors">Siap Kontribusi?</div>
          </HoverComment>
          <HoverComment comment="mari jadikan dunia lebih baik, dimulai dari sekolah kamu!">
            <div className="bg-green-400 rounded-xl p-4 text-white hover:bg-green-600 transition-colors">Pantau Sekolahmu!</div>
          </HoverComment>
        </div>

        {/* Rekomendasi */}
        <div className="mt-6 mb-20">
          <h2 className="font-semibold mb-4">Ada Apa Aja Ya?</h2>
          <div className="flex gap-6 overflow-x-auto pb-4 items-start">
            {items.map((item, i) => (
              <div
                key={i}
                className="min-w-[12rem] h-48 bg-white rounded-xl flex-shrink-0 hover:bg-lime-100 transition-colors cursor-pointer p-4 flex flex-col items-center"
              >
                <div className="w-12 h-12 mb-2">
                  <img src={item.icon} alt={`icon ${i}`} className="w-full h-full object-contain" />
                </div>
                <h3 className="font-bold mb-1 text-center">{item.title}</h3>
                <p className="text-sm mb-2 text-center">{item.desc}</p>
                <HoverComment comment="semua dimulai dari rasa ingin tahu akan kemajuan!">
                  <button className="mt-auto bg-lime-500 text-white px-2 py-1 rounded">
                    klik!
                  </button>
                </HoverComment>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <HoverBacklight count={8} distance={40}>
              <span className="font-bold text-4xl text-black">
               🏅 Sekolah Terbaik Bulan Ini!! 🏅
              </span>
            </HoverBacklight>
          </div>
          <h1 className="mt-5 font-semibold mb-2">
            #1Bersih dari sekolah bersih lainnya! sekolah kamu gimana? siap jadi terbaik berikutnya? atau bertahan di posisi terbaik saat ini?
          </h1>

          <Top
            rank={1}
            name="MAS ARRISALAH"
            onClick={() => navigate("../leaderboard")}
          />
        </div>
      
      </div>
    
    </div>
  );
}
