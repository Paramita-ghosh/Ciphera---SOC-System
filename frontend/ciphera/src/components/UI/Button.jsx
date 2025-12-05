import React from "react";

export default function Button({ text, onClick, className = "", ...props }) {
  return (
    <button
      onClick={onClick}
      className={`w-full py-2 rounded bg-red-600 hover:bg-red-700 text-white font-semibold ${className}`}
      {...props}
    >
      {text}
    </button>
  );
}
