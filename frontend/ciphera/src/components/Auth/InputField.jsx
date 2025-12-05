import React from "react";

export default function InputField({ label, value, onChange, type = "text", ...rest }) {
  return (
    <div className="mb-3">
      {label && <label className="block text-sm text-gray-300 mb-1">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 rounded bg-gray-900 border border-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-600"
        {...rest}
      />
    </div>
  );
}
