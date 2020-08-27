import React from "react";

export const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4">
      <span className="navbar-brand">Manuel</span>

      <button className="btn btn-outline-secondary">
        <i className="fas fa-sign-out-alt"> </i>
        Salir
      </button>
    </div>
  );
};
