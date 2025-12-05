import React, { useState, useContext } from "react";
import AuthLayout from "../components/Auth/AuthLayout";
import InputField from "../components/Auth/InputField";
import Button from "../components/UI/Button";
import { registerUser } from "../services/AuthService";
import { UserContext } from "../context/UserContext";
import { useNavigate, useParams } from "react-router-dom";

export default function Register() {
  const { role: routeRole } = useParams(); // optional role from URL
  const navigate = useNavigate();
  const { updateUser } = useContext(UserContext);

  const [form, setForm] = useState({ name: "", email: "", password: "", role: routeRole || "analyst" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setError("");
    setLoading(true);
    try {
      const data = await registerUser(form); // expects token etc
      await updateUser(data);
      navigate(`/${data.role}-dashboard`);
    } catch (err) {
      setError(err?.response?.data?.message || err.message || "Register failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout title={`Register (${form.role})`}>
      {error && <div className="bg-red-600/30 text-red-300 p-2 mb-3 rounded">{error}</div>}
      <InputField label="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <InputField label="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <InputField label="Password" type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <div className="mt-2 text-sm text-gray-300">Registering as: <strong>{form.role}</strong></div>
      <Button text={loading ? "Registering..." : "Register"} onClick={handleRegister} />
      <div className="mt-4 text-sm text-gray-400 text-center">
        Already have an account?{" "}
        <span 
          onClick={() => navigate(`/login/${form.role}`)} 
          className="text-red-400 hover:underline cursor-pointer"
        >
          Login here
        </span>
      </div>

    </AuthLayout>
  );
}
