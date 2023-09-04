import React, { useContext } from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { HashLink } from "react-router-hash-link";
import { AuthContext } from "../../context/AuthProvider";

const Navigation = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };

  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <HashLink smooth to="#services">
          Services
        </HashLink>
      </li>
      {user?.uid && (
        <li>
          <Link to="appointments">Your Appointments</Link>
        </li>
      )}
      <li>
        <Link to="login">Login</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 container h-24">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link className="btn btn-ghost py-2 h-full">
          <img src={logo} alt="logo" className="w-11/12" />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex mr-4">
        <ul className="menu menu-horizontal px-1 font-semibold space-x-3">
          {navLinks}
        </ul>
      </div>

      <div className="navbar-end space-x-4">
        <button className="btn btn-circle bg-[var(--primary-color)] hover:bg-[var(--primary-color)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0" />
          </svg>
        </button>

        <button className="btn btn-circle bg-[var(--primary-color)] hover:bg-[var(--primary-color)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>

        {user?.uid && (
          <button
            className="btn btn-info btn-outline rounded-none font-bold"
            onClick={handleLogout}
          >
            Log Out
          </button>
        )}

        <HashLink to="#services" smooth>
          <button className="btn btn-info btn-outline rounded-none font-bold">
            Make an Appointment
          </button>
        </HashLink>
      </div>
    </div>
  );
};

export default Navigation;
