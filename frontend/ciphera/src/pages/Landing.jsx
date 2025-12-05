// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// export default function Landing() {
//   const navigate = useNavigate();

//   return (
//     <div className="relative min-h-screen overflow-hidden bg-black text-white flex items-center justify-center">

//       {/* CYBER GRID */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.04)_1px,transparent_0)] bg-size-[40px_40px] opacity-10 z-0"></div>

//       {/* DARK GRADIENT */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-black to-red-950 opacity-90 z-0"></div>

//       {/* BACKGROUND IMAGE */}
//         <div
//         className="absolute inset-0 bg-cover bg-center opacity-25 blur-sm z-0"
//         style={{
//             backgroundImage:
//             "url('https://images.unsplash.com/photo-1611605698323-bcd7b97ac04d?auto=format&fit=crop&w=1920&q=80')"
//         }}
//         ></div>


//       {/* MATRIX RAIN */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">

//         {Array.from({ length: 35 }).map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute text-green-400 text-xs tracking-widest opacity-70 blur-[0.4px]"
//             initial={{ y: "-120%" }}
//             animate={{ y: "120%" }}
//             transition={{
//               duration: 5 + Math.random() * 6,
//               repeat: Infinity,
//               delay: Math.random() * 5,
//               ease: "linear",
//             }}
//             style={{
//               left: `${(i * 100) / 35}%`,
//               top: "-150px"
//             }}
//           >
//             {"101001010010101010010101001010101010".repeat(12)}
//           </motion.div>
//         ))}

//       </div>

//       {/* GLOW ORBS */}
//       <motion.div 
//         className="absolute top-10 left-20 w-60 h-60 bg-blue-500 blur-[200px] opacity-20 z-10"
//         animate={{ x: [0, 120, 0], y: [0, 100, 0] }}
//         transition={{ duration: 18, repeat: Infinity }}
//       />

//       <motion.div 
//         className="absolute bottom-10 right-20 w-60 h-60 bg-red-600 blur-[200px] opacity-20 z-10"
//         animate={{ x: [0, -120, 0], y: [0, -100, 0] }}
//         transition={{ duration: 18, repeat: Infinity }}
//       />

//       {/* CONTENT */}
//       <div className="relative z-20 text-center px-6 max-w-5xl">

//         <motion.h1
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-6xl font-extrabold tracking-widest"
//         >
//           <span className="text-blue-400 glow-blue">SOC</span>{" "}
//           <span className="text-red-400 glow-red">SECURE</span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1 }}
//           className="text-gray-400 mt-4"
//         >
//           AI Driven • Cyber Defense • Threat Intelligence
//         </motion.p>

//         {/* CARDS */}
//         <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">

//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="bg-white/5 border border-blue-500/40 backdrop-blur-xl rounded-xl p-8 cursor-pointer shadow-[0_0_30px_#3b82f660]"
//             onClick={() => navigate("/admin")}
//           >
//             <h2 className="text-3xl text-blue-400">ADMIN</h2>
//             <p className="mt-3 text-gray-400">
//               Control incidents, users, and threat intelligence
//             </p>
//             <button className="btn-blue mt-6">Enter Admin</button>
//           </motion.div>

//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="bg-white/5 border border-red-500/40 backdrop-blur-xl rounded-xl p-8 cursor-pointer shadow-[0_0_30px_#ef444460]"
//             onClick={() => navigate("/analyst")}
//           >
//             <h2 className="text-3xl text-red-400">ANALYST</h2>
//             <p className="mt-3 text-gray-400">
//               Monitor logs, investigate attacks
//             </p>
//             <button className="btn-red mt-6">Enter Analyst</button>
//           </motion.div>

//         </div>
//       </div>

//       {/* INLINE CSS */}
//       <style>{`
//         .glow-blue { text-shadow: 0 0 20px #3b82f6; }
//         .glow-red { text-shadow: 0 0 20px #ef4444; }

//         .btn-blue {
//           background:#1e40af;
//           padding:10px 24px;
//           border-radius:8px;
//           box-shadow:0 0 20px #3b82f6;
//         }

//         .btn-blue:hover {
//           background:#2563eb;
//         }

//         .btn-red {
//           background:#991b1b;
//           padding:10px 24px;
//           border-radius:8px;
//           box-shadow:0 0 20px #ef4444;
//         }

//         .btn-red:hover {
//           background:#dc2626;
//         }
//       `}</style>

//     </div>
//   );
// }


import RoleCard from "../components/Auth/RoleCard";

export default function Landing() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white flex items-center justify-center">

      {/* Cyber Hacker Background */}
      <div className="absolute inset-0 
        bg-[url('https://images.unsplash.com/photo-1614064641938-3bbee52942c7')] 
        bg-cover bg-center opacity-20 blur-sm scale-110">
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-black via-black/90 to-black"></div>

      {/* Blue & Red glow */}
      <div className="absolute top-10 left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-10 right-32 w-72 h-72 bg-red-600/20 rounded-full blur-[150px]" />

      

      {/* Content */}
      <div className="z-10 relative grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* TITLE SECTION */}
        <div className="col-span-full text-center mb-12">

          <div className="flex justify-center items-center gap-4">
            
            {/* LOGO */}
            <img 
              src="https://cdn-icons-png.flaticon.com/512/2092/2092663.png" 
              className="w-14 drop-shadow-[0_0_15px_#3b82f6]"
              alt="SOC Logo"
            />

            {/* TITLE */}
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-wider">
              <span className="text-blue-400 drop-shadow-[0_0_10px_#3b82f6]">SOC</span>{" "}
              <span className="text-red-400 pl-1 drop-shadow-[0_0_10px_#ef4444]">SECURE</span>
            </h1>
          </div>

          {/* TAGLINE */}
          <p className="mt-4 text-gray-400 tracking-wide">
            Intelligent Cyber Defense • Incident Control • Threat Visibility
          </p>

        </div>

        {/* ROLE CARDS */}

        <RoleCard 
          role="admin" 
          title="Admin" 
          subtitle="Command center control" 
        />

        <RoleCard 
          role="analyst" 
          title="Analyst" 
          subtitle="Threat analysis & response" 
        />

      </div>

    </div>
  );
}

