import React from "react";

export const Input = ({ label, placeholder, ...props }) => {
  return (
    <div className="flex flex-col gap-2 text-white/90">
      {label && <label className="text-sm font-medium">{label}</label>}
      <input
        {...props}
        placeholder={placeholder}
        className="px-4 py-2 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 text-white placeholder-white/60"
      />
    </div>
  );
};