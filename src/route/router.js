import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import NotFound from "../pages/NotFound/NotFound";
import PrivateRoute from "../Private/PrivateRoute";
import PublicRoute from "../Public/PbulicRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../pages/Home/Home");

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "/register",
    element: (
      <PublicRoute>
        <Register />
      </PublicRoute>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
