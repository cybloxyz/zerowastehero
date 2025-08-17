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
    <div className="bg-white rounded-full flex items-center px-4 w-80 h-10 shadow">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 outline-none text-gray-700"
      />
      <img
        src={searchIcon}
        alt="Search"
        className="w-6 h-6 cursor-pointer"
        onClick={handleSearch}
      />
    </div>
  );
}
