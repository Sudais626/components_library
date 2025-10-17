import React from "react";

export const IconButton = ({ className = "", children, ...props }) => {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
    >
      {children}
    </button>
  );
};