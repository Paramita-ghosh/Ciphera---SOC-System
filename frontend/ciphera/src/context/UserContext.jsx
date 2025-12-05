import React, { createContext, useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";
import { getProfile } from "../services/AuthService";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // { id, name, role, ...}
  const [loading, setLoading] = useState(true);

  // On mount: if token present, fetch profile
  useEffect(() => {
    const init = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const profile = await getProfile();
        // profile should include role and name
        setUser(profile);
      } catch (err) {
        console.error("Failed to fetch profile:", err?.response?.data || err.message);
        clearUser();
      } finally {
        setLoading(false);
      }
    };
    init();
  }, []);

  // updateUser: call when login/register completes; data = { token, id, role, name }
  const updateUser = async (data) => {
    if (data?.token) {
      localStorage.setItem("token", data.token);
    }
    // optionally fetch profile for full user object
    try {
      const profile = await getProfile();
      setUser(profile);
    } catch (err) {
      // fallback to partial info if profile fails
      setUser({ id: data?.id, name: data?.name, role: data?.role });
    }
    setLoading(false);
  };

  const clearUser = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider value={{ user, loading, updateUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
