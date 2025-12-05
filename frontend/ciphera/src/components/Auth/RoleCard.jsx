import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function RoleCard({ role, title, subtitle }) {
  const navigate = useNavigate();
  const isAdmin = role === "admin";

  return (
    <motion.div
      whileHover={{ scale: 1.07, rotateX: 5, rotateY: 5 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 200 }}

      // ✅ FIXED ROLE BASED REDIRECT
      onClick={() => navigate(`/login/${role}`)}

      className={`relative p-8 rounded-2xl cursor-pointer backdrop-blur-xl border
        ${isAdmin 
          ? "border-blue-500/30 shadow-[0_0_40px_#3b82f670]" 
          : "border-red-500/30 shadow-[0_0_40px_#ef444470]"}
        bg-gradient-to-br from-black/60 via-black/40 to-black/70
        hover:border-opacity-80`}
    >

      {/* Neon glow */}
      <div className={`absolute -inset-1 rounded-2xl opacity-20 blur-xl
        ${isAdmin ? "bg-blue-500" : "bg-red-500"}`} />

      <div className="relative z-10">
        <h3 className={`text-2xl font-bold uppercase tracking-wide
          ${isAdmin ? "text-blue-400" : "text-red-400"}`}>
          {title || role}
        </h3>

        <p className="text-gray-300 mt-3 text-sm tracking-wide">
          {subtitle || `Enter as ${role}`}
        </p>

        <div className={`mt-6 inline-block text-xs uppercase tracking-widest px-4 py-2 rounded-lg
          ${isAdmin 
            ? "bg-blue-600/30 text-blue-300 border border-blue-500/40" 
            : "bg-red-600/30 text-red-300 border border-red-500/40"}`}>
          Access panel
        </div>
      </div>

    </motion.div>
  );
}
