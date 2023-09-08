import React, { useContext } from "react";
import "./Navigation.css";
import logo from "../../../assets/logos/Group 1329.png";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const Navigation = () => {
  const { user, logOut } = useContext(AuthContext);

  const location = useLocation();

  // log out method
  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("sign out successful");
      })
      .catch((err) => console.error(err));
  };

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
      {user?.uid && (
        <li>
          <Link to="/registeredEvents">My Events</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-transparent container">
      <div className="navbar-start w-[20%]">
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

            {user?.uid ? (
              <>
                <Link>
                  <div className="avatar mr-3">
                    <div className="w-12 rounded-full border bg-blue-500">
                      {user?.photoURL ? (
                        <img src={user?.photoURL} />
                      ) : (
                        <div className=" text-center pt-2 text-2xl font-bold text-white">
                          <span>{user?.email[0].toUpperCase()}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
                <button className="btn btn-error mr-5" onClick={handleLogout}>
                  Log Out
                </button>
              </>
            ) : (
              <>
                {location.pathname.includes("register") ? (
                  <Link className="btn btn-primary mr-5" to="/login">
                    Login
                  </Link>
                ) : (
                  <Link className="btn btn-primary mr-5" to="/register">
                    Register
                  </Link>
                )}
              </>
            )}

            <li>
              <Link className="btn btn-neutral mt-2 pt-3" to="/admin">
                Admin
              </Link>
            </li>
          </ul>
        </div>
        <Link className="btn btn-ghost">
          <img src={logo} alt="logo" className="h-full " />
        </Link>
      </div>

      {/* navbar right side */}
      <div className="navbar-end hidden lg:flex ms-auto w-[fit-content]">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>

        {user?.uid ? (
          <>
            <div className="avatar mr-3">
              <div className="w-12 rounded-full border bg-blue-500">
                {user?.photoURL ? (
                  <>
                    <img src={user?.photoURL} />
                  </>
                ) : (
                  <div className=" text-center pt-2 text-2xl font-bold text-white">
                    <span>{user?.email[0].toUpperCase()}</span>
                  </div>
                )}
              </div>
            </div>

            <button className="btn btn-error mr-5" onClick={handleLogout}>
              Log Out
            </button>
          </>
        ) : (
          <>
            {location.pathname.includes("register") ? (
              <Link className="btn btn-primary mr-5" to="/login">
                Login
              </Link>
            ) : (
              <Link className="btn btn-primary mr-5" to="/register">
                Register
              </Link>
            )}
          </>
        )}

        <Link className="btn btn-neutral" to="/admin">
          Admin
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
