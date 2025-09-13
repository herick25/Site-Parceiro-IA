import React from "react";

export default function ModernCTA({ children, onClick, as = "button", href }) {
  const classes =
    "relative inline-flex items-center justify-center gap-3 px-6 py-3 text-lg font-semibold text-white " +
    "bg-gradient-to-r from-menta to-emerald-600 rounded-xl shadow-md " +
    "transition-transform duration-300 " +
    "hover:scale-[1.05] hover:shadow-lg " +
    "animate-subtle-float";

  if (as === "a") {
    return (
      <a href={href} onClick={onClick} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
