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
import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

function Model({ url, scale = 2 }) {
  const { scene, animations } = useGLTF(url);
  const { actions, mixer } = useAnimations(animations, scene);

  useEffect(() => {
    const animNames = Object.keys(actions);
    if (animNames.length > 0) {
      actions[animNames[0]].play();
    }
    return () => mixer.stopAllAction();
  }, [actions, mixer]);

  return <primitive object={scene} scale={scale} position={[0, -2, 1.5]} />;
}

export default function Home() {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const items = [
    { icon: cal, title: "GreenCalendar", desc: "Lihat kalender, ada hari bersih apa aja!" },
    { icon: rrr, title: "Inovate!", desc: "Inovasi apa saja? Yuk merapat!" },
    { icon: bin, title: "TrashBin", desc: "Kelola sampahmu dengan mudah!" },
    { icon: cas, title: "VirtualTour", desc: "Lihat sekolah lain secara virtual!" },
    { icon: mon, title: "Waste-Bank", desc: "Tabung poin dari pengelolaan sampah!" },
  ];

  const dailyStatus = [true, false, false, true, false, true, true];

  const modelScale = windowWidth < 640 ? 1.2 : 2;

  return (
    <div className="bg-gradient-to-b from-lime-100 to-lime-300 min-h-screen">
      {/* Navbar */}
      <nav className="flex flex-wrap justify-between items-center px-4 sm:px-6 py-4 bg-white shadow">
        <HoverBacklight count={8} distance={40}>
          <div className="font-bold text-lg sm:text-4xl text-lime-800 mb-2 sm:mb-0">
            The Zero-Waste Hero 🌱
          </div>
        </HoverBacklight>

        <div className="flex flex-wrap gap-2 sm:gap-4">
          <Link to="/login-student">
            <button className="bg-white border-2 w-10 sm:w-20 h-6 sm:h-12 rounded-3xl text-xs sm:text-xl font-bold hover:scale-105 transition">
              Siswa
            </button>
          </Link>
          <Link to="/login-school">
            <button className="bg-white border-2 border-lime-500 w-10 sm:w-20 h-6 sm:h-12 rounded-3xl text-xs sm:text-xl font-semibold hover:scale-105 transition">
              Masuk
            </button>
          </Link>
          <Link to="/register">
            <button className="bg-lime-300 w-12 sm:w-24 h-6 sm:h-12 rounded-3xl text-xs sm:text-xl font-bold hover:scale-105 transition">
              Daftar
            </button>
          </Link>
        </div>
      </nav>

      <HoverComment comment="kritik, saran dan pertanyaan!">
        <button className="fixed mx-4 sm:mx-8 hover:scale-125 z-50 transition-transform">
          <img
            src={zew}
            alt="FaQ"
            className="w-16 sm:w-24 h-16 sm:h-24 animate-wiggle"
          />
        </button>
      </HoverComment>

      <div className="max-w-5xl mx-auto p-4">
        {/* Search */}
        <SearchBar onSearch={(q) => alert(`Cari: ${q}`)} />

        {/* Banner */}
        <div className="relative bg-white mt-4 rounded-xl flex flex-col sm:flex-row items-center p-4">
          {/* 3D Model */}
          <HoverComment comment="kenalin aku ZEWRO!">
            <div className="w-full sm:w-72 h-64 sm:h-72 cursor-pointer">
              <Canvas className="w-full h-full">
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 10]} />
                <Model url="/models/ImageToStl.com_Animation_Agree_Gesture_withSkin.glb" scale={modelScale} />
                <OrbitControls enableZoom={false} />
              </Canvas>
            </div>
          </HoverComment>

          {/* Text */}
          <div className="w-full sm:w-2/3 mt-4 sm:mt-0 sm:pl-4 flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-lime-600">Ayo Zero-Waste Heroes!</h2>
            <p className="text-base text-sm sm:text-base">
              Setiap sampah yang kamu pilah, setiap plastik yang kamu hindari, membuat dunia lebih bersih. Ayo, jadi pahlawan lingkungan sekarang!
            </p>
            <p className="mt-1 sm:text-base text-sm font-semibold text-red-600">
              "Aksi Kecil untuk Perubahan Besar"
            </p>
          </div>
        </div>

        {/* Kategori */}
        <div className="relative bg-white mt-6 p-4 rounded-xl shadow flex flex-wrap justify-center gap-6 overflow-x-auto">
          {dailyStatus.map((status, i) => (
            <div key={i} className="flex flex-col items-center flex-shrink-0">
              <div
                className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center 
                ${status ? 'bg-orange-500' : 'bg-gray-300'}`}
              >
                <img src={stk} alt="streak icon" className="w-12 h-12 sm:w-14 sm:h-14 hover:scale-125" />
              </div>
              <span className="text-sm sm:text-base mt-2 sm:mt-3 font-medium">{`day ${i + 1}`}</span>
            </div>
          ))}
        </div>

        {/* Fitur unggulan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <HoverComment comment="semua dimulai dari mimpi, kamu bisa kontribusi dan upayakan hasil nyata!">
            <div className="bg-gradient-to-r from-sky-400 to-sky-500 rounded-xl p-4 text-white hover:scale-105 text-center">Siap Kontribusi?</div>
          </HoverComment>
          <HoverComment comment="mari jadikan dunia lebih baik, dimulai dari sekolah kamu!">
            <div className="bg-gradient-to-r from-green-400 to-green-500 rounded-xl p-4 text-white hover:scale-105 text-center">Pantau Sekolahmu!</div>
          </HoverComment>
        </div>

        {/* Rekomendasi */}
        <div className="mt-6 mb-20">
          <h2 className="font-semibold mb-4 text-lg sm:text-xl">Ada Apa Aja Ya?</h2>
          <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 items-start">
            {items.map((item, i) => (
              <div
                key={i}
                className="min-w-[9rem] sm:min-w-[12rem] h-48 bg-white rounded-xl flex-shrink-0 hover:bg-lime-100 transition-colors cursor-pointer p-4 flex flex-col items-center"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 mb-2">
                  <img src={item.icon} alt={`icon ${i}`} className="w-full h-full object-contain" />
                </div>
                <h3 className="font-bold mb-1 text-center text-sm sm:text-base">{item.title}</h3>
                <p className="text-xs sm:text-sm mb-2 text-center">{item.desc}</p>
                <HoverComment comment="semua dimulai dari rasa ingin tahu akan kemajuan!">
                  <button className="mt-auto bg-lime-500 text-white px-2 py-1 rounded text-xs sm:text-sm">
                    klik!
                  </button>
                </HoverComment>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <HoverBacklight count={8} distance={40}>
              <span className="font-bold text-3xl sm:text-4xl text-black text-center">
               Sekolah Terbaik Saat Ini
               <h1>🏅</h1>
              </span>
            </HoverBacklight>
          </div>
          <h1 className="mt-3 font-semibold mb-2 text-sm sm:text-base text-center">
            #1Bersih dari sekolah bersih lainnya! sekolah kamu gimana? siap jadi terbaik berikutnya? atau bertahan di posisi terbaik saat ini?
          </h1>
    <div className="relative flex flex-warp">
          <Top
            rank={1}
            name="MAS ARRISALAH"
            onClick={() => navigate("../leaderboard")}
          />
    </div>
        </div>
      
      </div>
    
    </div>
  );
}
