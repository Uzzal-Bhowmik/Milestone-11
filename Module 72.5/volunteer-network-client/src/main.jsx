import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import EventRegister from "./Pages/Private/EventRegister/EventRegister.jsx";
import Register from "./Pages/Register/Register.jsx";
import Login from "./Pages/Login/Login.jsx";
import PrivateRouter from "./Pages/PrivateRoute/PrivateRouter.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/events/:id",
        loader: async ({ params }) =>
          await fetch(`http://localhost:5000/events/${params.id}`),
        element: (
          <PrivateRouter>
            <EventRegister />
          </PrivateRouter>
        ),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
