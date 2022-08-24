import React from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Home
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/tabla" className="nav-link active">
                  Tabla
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/formulario" className="nav-link active">
                  Formulario
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </header>
  );
}

export default Navbar;
