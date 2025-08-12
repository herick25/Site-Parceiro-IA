import React from "react";

export default function ModernCTA({ children, onClick, as = "button", href }) {
  const classes =
    "inline-flex items-center justify-center gap-3 px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-menta to-emerald-600 rounded-xl shadow-md hover:scale-105 hover:brightness-110 transition-transform";

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
