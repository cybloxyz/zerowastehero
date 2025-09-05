import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LoginSchool() {
  const [name, setName] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    // nanti ganti fetch ke backend untuk autentikasi
    login("school", name); // simpan user di context
    navigate("/dashboard-school"); // redirect otomatis
  };

  return (
    <div>
      <h1>Login Sekolah</h1>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Nama" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
