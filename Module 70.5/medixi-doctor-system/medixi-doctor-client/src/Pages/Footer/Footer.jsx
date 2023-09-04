import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="bg-[#27467c] py-5">
      <div className="flex justify-between items-center container text-white font-medium">
        <p>Copyright 2023 Medixi. All Rights Reserved by Uzzal Bhowmik</p>
        <p className="space-x-6">
          <Link to="/" className="underline">
            Home
          </Link>
          <HashLink smooth to="#services" className="underline">
            Services
          </HashLink>
          <Link to="appointments" className="underline">
            Appointments
          </Link>
          <Link to="login" className="underline">
            Login
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
