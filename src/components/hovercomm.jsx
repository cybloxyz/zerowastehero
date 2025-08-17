import { useState } from "react";

export default function HoverComment({ children, comment, className }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Wrapper wajib, terutama untuk Canvas */}
      <div className="w-full h-full">
        {children}
      </div>

      {/* Comment box */}
      {hovered && (
        <div className="absolute top-0 left-full ml-2 w-64 p-3 bg-white border rounded shadow-lg z-50">
          <p className="text-sm text-gray-700">{comment}</p>
        </div>
      )}
    </div>
  );
}
