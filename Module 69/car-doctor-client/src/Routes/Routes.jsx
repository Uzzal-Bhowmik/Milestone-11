import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ServiceCheckout from "../pages/ServiceCheckout/ServiceCheckout";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "../pages/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/services/:id",
        loader: async ({ params }) =>
          await fetch(
            `https://car-doctor-server-coral-eta.vercel.app/services/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <ServiceCheckout />
          </PrivateRoute>
        ),
      },
      {
        path: "/bookings",
        element: (
          <PrivateRoute>
            <Bookings />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
