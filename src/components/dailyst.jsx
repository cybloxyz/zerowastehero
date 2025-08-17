import { useState } from "react";
import stk from "../assets/strike.svg";
import HoverComment from "../components/hovercomm.jsx";

export default function DailyStreak() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  
  // Dummy progress: true = sudah selesai
  const [dailyProgress] = useState([true, true, false, false, false, false, false]);

  const todayIndex = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;

  return (
    <div className="bg-white mt-6 p-4 rounded-xl shadow flex justify-center gap-6 overflow-x-auto">
      {days.map((day, i) => {
        const isDone = dailyProgress[i];
        return (
          <div key={i} className="flex flex-col items-center flex-shrink-0">
            <HoverComment comment={isDone ? "Good job! Kamu sudah menyelesaikan task hari ini!" : "Ayo selesaikan task hari ini!"}>
              <div className={`w-20 h-20 rounded-full flex items-center justify-center 
                ${isDone ? 'bg-orange-400' : 'bg-gray-300'} cursor-pointer`}>
                <img src={stk} alt="streak icon" className="w-14 h-14 hover:scale-125" />
              </div>
            </HoverComment>
            <span className="text-base mt-3 font-medium">{day}</span>
          </div>
        );
      })}
    </div>
  );
}
