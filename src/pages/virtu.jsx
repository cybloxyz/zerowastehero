import cr from "../assets/crown.svg";
import tr from "../assets/tr.svg";
import HoverBacklight from "../components/burst";
import { Link } from "react-router-dom";

export default function Leaderboard() {

  return (
    <div className="bg-gradient-to-b from-lime-100 to-lime-300 min-h-screen flex flex-col items-center sm:py-8 py-14 px-4">
      <HoverBacklight count={8} distance={40}>
        <span className="sm:text-5xl text-3xl font-bold mb-4">Virtual Tour</span>
        </HoverBacklight>
      <h1 className="text xl font-semibold mb-4 text-center">
        Lihat sekolah lain secara virtual!
      </h1>

      <div className="flex items-center justify-center mt-12 animate-wiggle">
        <img src={tr} alt="icon" className="sm:w-24 w-14 h-full object-contain"/>
      </div>
    </div>
  );
}
