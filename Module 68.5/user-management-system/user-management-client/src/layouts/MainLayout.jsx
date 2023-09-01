import React from "react";
import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default MainLayout;
