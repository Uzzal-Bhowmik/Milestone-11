import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Update from "./component/Update.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    loader: async () => await fetch("http://localhost:5000/books"),
    element: <App />,
  },
  {
    path: "/update/:id",
    loader: async ({ params }) =>
      await fetch(`http://localhost:5000/books/${params.id}`),
    element: <Update />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
