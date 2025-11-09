import { useEffect, useState } from "react";
import "./splashscreen.css";

export default function SplashScreen({ onFinish }) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
      onFinish();
    }, 15000); // 3,5 detik intro

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`splash-container ${hide ? "fade-out" : ""}`}>
      <h2 className="splash-title">✨ Terima kasih telah berkunjung! ✨</h2>
      <p className="splash-desc">
        Website ini merupakan platform edukasi berbasis gamifikasi tentang pengelolaan sampah
        <br />
        dan masih dalam tahap pengembangan.
        <br />
        <br />
        full stack developer yang merupakan siswa SMA juga sedang belajar dalam pengembangan website ini
        <br />
        Silakan berkeliling!
      </p>

      <button className="skip-btn" onClick={onFinish}>
        masuk
      </button>
    </div>
  );
}
