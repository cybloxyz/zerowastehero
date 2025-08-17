import HoverBacklight from '../components/burst.jsx';

export default function Register() {
  return (
    <div className="min-h-screen bg-lime-200 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Daftar Sekolah</h2>
        
        <form className="space-y-4">
          <input 
            type="text" 
            placeholder="Nama Sekolah" 
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-lime-400 outline-none"
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-lime-400 outline-none"
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-lime-400 outline-none"
          />
    
    <div className="mt-8 text-center">
        <HoverBacklight count={8} distance={30}>
          <button 
            type="submit" 
            className="w-24 bg-lime-500 text-white py-2 rounded-lg font-semibold hover:bg-lime-600 transition"
          >
            Register
          </button>
        </HoverBacklight>
    </div>
        </form>

        <p className="text-sm text-center mt-4">
          Sudah punya akun? 
          <a href="/login" className="text-lime-600 font-semibold hover:underline"> Login</a>
        </p>
      </div>
    </div>
  );
}
