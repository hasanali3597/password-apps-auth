import { createBrowserRouter } from "react-router";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/home/Home";
import Singup from "../components/singup/Singup";
import Login from "../components/login/Login";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Mainlayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/singup",
        Component: Singup,
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
]);
