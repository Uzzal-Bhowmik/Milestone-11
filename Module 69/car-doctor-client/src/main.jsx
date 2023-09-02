import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import ContextAuth from "./providers/ContextAuth";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="container">
    <React.StrictMode>
      <ContextAuth>
        <RouterProvider router={router} />
      </ContextAuth>
    </React.StrictMode>
  </div>
);
