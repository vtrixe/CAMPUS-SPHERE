import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import HomeLayout from "../layouts/HomeLayout";
import ProfileLayout from "../layouts/ProfileLayout";
import ConnectionLayout from "../layouts/ConnectionLayout";
import  Landing from "../Pages/Landing"
import "../index.scss"
import Portfolio from "../Pages/portfolio.jsx";
import Hiring from "../Pages/Hiring";
import Events from "../Pages/Events";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
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
    path: "/home",
    element: <HomeLayout />,
  },
  {
    path: "/profile",
    element: <ProfileLayout />,
  },
  {
    path: "/connections",
    element: <ConnectionLayout />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />
  },
  {
    path: "/hiring",
    element: <Hiring />
  },
  {
    path: "/events",
    element: <Events />
  }
]);
