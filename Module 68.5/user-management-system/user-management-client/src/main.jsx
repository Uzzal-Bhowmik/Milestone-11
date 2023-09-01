import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import AddUser from "./components/AddUser.jsx";
import UpdateUser from "./components/UpdateUser.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        loader: async () => await fetch("http://localhost:5000/users"),
        element: <App />,
      },
      {
        path: "/addUser",
        element: <AddUser />,
      },
      {
        path: "/updateUser/:id",
        loader: async ({ params }) =>
          await fetch(`http://localhost:5000/users/${params.id}`),
        element: <UpdateUser />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
