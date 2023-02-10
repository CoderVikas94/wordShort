import React from "react";
import { Link } from "react-router-dom";


function Navbar({lightMode,mode}) {
  console.log();
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode === "light" ? "dark" : "dark"} `}>
      <div className="container-fluid mx-5">
        <Link className="navbar-brand fs-2 fw-bold" to="/">
          Word Counter!
        </Link>
        </div>
        <div className="navbar-nav ">
          <Link className="nav-a active fs-5 fw-bold " aria-current="page" to="/">
            Home
          </Link>
          <Link className="nav-a  active mx-5 fs-5 fw-bold" to="/About">
            About
          </Link>
        </div>
        <span className="spanNav">
        <div className="form-check form-switch mx-2">
  <input className="form-check-input fs-5 fw-bold" type="checkbox" id="changeMode" onChange={lightMode}/>
  <i className="fa-solid fa-sun mx-1 fs-5 fw-bold mt-1" id="dark" style={{display:"none"}}></i>
  <i class="fa-light fa-sun" id = "light" style={{display:"block"}}></i></div></span>
    </nav>
  );
}

export default Navbar;
