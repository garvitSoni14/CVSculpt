import React from "react";
import { Link } from "react-router";

function Navbar() {
  return (
    <div className="navbar shadow bg-base-100 relative">
      {/* Left side (logo + dropdown for mobile) */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-base-100 rounded-box z-[5] mt-3 w-40 p-2 shadow text-lg"
          >
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/services"}>Services</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact Us</Link>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl font-bold">
          CVSculpt
        </Link>
      </div>

      {/* Absolute centered nav items */}
      <div className="navbar-center absolute left-1/2 transform -translate-x-1/2 hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-medium gap-6">
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/services"}>Services</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
