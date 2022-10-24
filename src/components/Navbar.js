import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="navbarSty mb-5">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Home{" "}
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
                <Link to="/about" className="nav-link">
                  {" "}
                  About
                </Link>{" "}
              </li>
              <li className="nav-item">
                <Link to="/mobile" className="nav-link">
                  Mobile-Phones
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Cars" className="nav-link">
                  Cars
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Houses" className="nav-link">
                  Houses
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/LandsPlots" className="nav-link">
                  LandsPlots
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Tablets" className="nav-link">
                  Tablets
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/TvVideoAudio" className="nav-link">
                  TV-Audio-Video 
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
