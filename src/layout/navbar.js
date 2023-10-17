import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <Link className="navbar-brand text-light" to="/">Home</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          
            
            <li className="nav-item">
              <Link className="nav-link text-light" to="/Questionnaire">Questionnaire</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/GlobalResult">diagnostique </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/CategoryResults"> diagnostique par categories </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;