import Login from "../pages/Auth/Login/Login";
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
    path: "*",
    element: <NotFound />,
  },
]);
