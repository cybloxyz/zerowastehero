import { useState } from "react";
import searchIcon from "../assets/searchbar.svg";

export default function SearchBar({ placeholder = "Mau cari apa nih?..", onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query); // kirim teks input ke parent
    }
  };

  return (
    <div className="bg-white rounded-xl p-4 flex items-center gap-4 shadow">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 px-4 py-2 border rounded-full outline-none"
      />
      <img
        src={searchIcon}
        alt="Search"
        className="w-8 h-8 text-green-500 cursor-pointer hover:animate-wiggle"
        onClick={handleSearch}
      />
    </div>
  );
}
