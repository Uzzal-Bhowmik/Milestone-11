import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    loader: async () => await fetch("http://localhost:5000/coffee"),
    element: <App />,
  },
  {
    path: "/addCoffee",
    element: <AddCoffee />,
  },
  {
    path: "/updateCoffee/:id",
    loader: async ({ params }) =>
      await fetch(`http://localhost:5000/coffee/${params.id}`),
    element: <UpdateCoffee />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
