import Home from "../pages/Home";
import Favorite from "../pages/Favorite";
import Detail from "../pages/Detail";
import Login from "../components/Login"

export const routes = [
  {
    path: "/",
    exact: true,
    component: <Login />,
    title: "Login",
    isHeaderElement: true,
  },
  {
    path: "/movies",
    exact: true,
    component: <Home />,
    title: "Home",
    isHeaderElement: true,
  },
  {
    path: "/movies/:id",
    exact: false,
    component: <Detail />,
    title: "Detail",
    isHeaderElement: false,
  },
  {
    path: "/favorites",
    exact: false,
    component: <Favorite />,
    title: "Favorites",
    isHeaderElement: true,
  },
  {
    path: "/sign_out",
    title: "Sign Out",
    isHeaderElement: true
  }
];
