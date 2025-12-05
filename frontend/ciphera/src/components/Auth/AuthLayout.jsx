import React from "react";

export default function AuthLayout({ children, title }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white relative">
      {/* subtle bg glow */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-900 via-black to-red-900 opacity-70"></div>

      <div className="relative z-10 w-full max-w-md p-8 rounded-2xl bg-black/60 border border-white/5 backdrop-blur">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        {children}
      </div>
    </div>
  );
}
