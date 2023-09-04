import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import Appointment from "./Pages/Appointment/Appointment.jsx";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute.jsx";
import ScheduledAppointments from "./Pages/ScheduledAppointments/ScheduledAppointments.jsx";

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
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "/doctors/:id",
        loader: async ({ params }) =>
          await fetch(`http://localhost:5000/doctors/${params.id}`),
        element: (
          <PrivateRoute>
            <Appointment />
          </PrivateRoute>
        ),
      },

      {
        path: "appointments",
        element: (
          <PrivateRoute>
            <ScheduledAppointments />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
