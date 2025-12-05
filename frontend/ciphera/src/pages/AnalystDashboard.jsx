// AnalystDashboard.jsx
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function AnalystDashboard() {
  const { user } = useContext(UserContext);
  return (
    <div className="min-h-screen p-8 bg-black text-white">
      <h1 className="text-3xl">Analyst Dashboard</h1>
      <p className="mt-3">Welcome, {user?.name || user?.email}</p>
      {/* Add analyst components here */}
    </div>
  );
}
