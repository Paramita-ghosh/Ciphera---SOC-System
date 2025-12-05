import React, { useState, useContext } from "react";
import AuthLayout from "../components/Auth/AuthLayout";
import InputField from "../components/Auth/InputField";
import Button from "../components/UI/Button";
import { useParams, useNavigate } from "react-router-dom";
import { loginUser } from "../services/AuthService";
import { UserContext } from "../context/UserContext";

export default function Login() {
  const { role } = useParams(); // optional use
  const navigate = useNavigate();
  const { updateUser } = useContext(UserContext);

  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");
    setLoading(true);
    try {
      const data = await loginUser(form); // expects { token, id, role, name }
      await updateUser(data); // will store token and fetch profile
      // redirect according to returned role (server returns role)
      const redirectRole = data.role || (role ?? "analyst");
      navigate(`/${redirectRole}-dashboard`);
    } catch (err) {
      setError(err?.response?.data?.message || err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout title={`${role ? role.toUpperCase() : "User"} Login`}>
      {error && <div className="bg-red-600/30 text-red-300 p-2 mb-3 rounded">{error}</div>}
      <InputField label="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <InputField label="Password" type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <Button text={loading ? "Logging in..." : "Login"} onClick={handleLogin} />
      <div className="mt-4 text-sm text-gray-400 text-center">
        Don’t have an account?{" "}
        <span 
          onClick={() => navigate(`/register/${role || "analyst"}`)} 
          className="text-blue-400 hover:underline cursor-pointer"
        >
          Sign up here
        </span>
      </div>

    </AuthLayout>
  );
}
