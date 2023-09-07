import React, { useContext } from "react";
import "./Navigation.css";
import logo from "../../../assets/logos/Group 1329.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const Navigation = () => {
  const { user } = useContext(AuthContext);

  const navlinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">Donation</Link>
      </li>
      <li>
        <Link to="/">Events</Link>
      </li>
      <li>
        <Link to="/">Blogs</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-transparent container">
      <div className="navbar-start ">
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
            {navlinks}

            <li className="items-start">
              <Link className="btn btn-primary py-3 my-4" to="/register">
                Register
              </Link>
            </li>
            <li className="items-start">
              <Link className="btn btn-neutral py-3 mb-5" to="/admin">
                Admin
              </Link>
            </li>
          </ul>
        </div>
        <Link className="btn btn-ghost">
          <img src={logo} alt="logo" className="h-full " />
        </Link>
      </div>

      <div className="navbar-end hidden lg:flex">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>

        <Link className="btn btn-primary mr-5" to="/register">
          Register
        </Link>
        <Link className="btn btn-neutral" to="/admin">
          Admin
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
