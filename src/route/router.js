import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import AirTicket from "../pages/Dashboard/Booking/AirTicket/AirTicket";
import HotelBooking from "../pages/Dashboard/Booking/HotelBooking/HotelBooking";
import FlightPackage from "../pages/Dashboard/Commissions/FlightPackage/FlightPackage";
import HotelPackage from "../pages/Dashboard/Commissions/HotelPackage/HotelPackage";
import TotalSale from "../pages/Dashboard/Sale/TotalSale/TotalSale";
import Currency from "../pages/Dashboard/Setting/Currency/Currency";
import ProfileSetting from "../pages/Dashboard/Setting/ProfileSetting/ProfileSetting";
import Report from "../pages/Dashboard/Setting/Report/Report";
import MainStatement from "../pages/Dashboard/Transaction/MainStatement/MainStatement";
import Payment from "../pages/Dashboard/Transaction/Payment/Payment";
import Admin from "../pages/Dashboard/User/Admin/Admin";
import Agent from "../pages/Dashboard/User/Agent/Agent";
import NotFound from "../pages/NotFound/NotFound";
import SearchResult from "../pages/Trip/Flight/FlightType/SearchResult/SearchResult";
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
    errorElement: <NotFound />,
    children: [
      {
        path: "/flights/:search",
        element: (
          <PrivateRoute>
            <SearchResult />
          </PrivateRoute>
        ),
      },
    ],
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
    path: "/airTicket",
    element: (
      <PrivateRoute>
        <AirTicket />
      </PrivateRoute>
    ),
  },
  {
    path: "/hotelBooking",
    element: (
      <PrivateRoute>
        <HotelBooking />
      </PrivateRoute>
    ),
  },
  {
    path: "/payment",
    element: (
      <PrivateRoute>
        <Payment />
      </PrivateRoute>
    ),
  },
  {
    path: "/payment",
    element: (
      <PrivateRoute>
        <Payment />
      </PrivateRoute>
    ),
  },
  {
    path: "/mainStatement",
    element: (
      <PrivateRoute>
        <MainStatement />
      </PrivateRoute>
    ),
  },
  {
    path: "/flightsPackages",
    element: (
      <PrivateRoute>
        <FlightPackage />
      </PrivateRoute>
    ),
  },
  {
    path: "/hotelPackages",
    element: (
      <PrivateRoute>
        <HotelPackage />
      </PrivateRoute>
    ),
  },
  {
    path: "/profileSettings",
    element: (
      <PrivateRoute>
        <ProfileSetting />
      </PrivateRoute>
    ),
  },
  {
    path: "/currency",
    element: (
      <PrivateRoute>
        <Currency />
      </PrivateRoute>
    ),
  },
  {
    path: "/report",
    element: (
      <PrivateRoute>
        <Report />
      </PrivateRoute>
    ),
  },
  {
    path: "/totalSales",
    element: (
      <PrivateRoute>
        <TotalSale />
      </PrivateRoute>
    ),
  },
  {
    path: "/admins",
    element: (
      <PrivateRoute>
        <Admin />
      </PrivateRoute>
    ),
  },
  {
    path: "/agent",
    element: (
      <PrivateRoute>
        <Agent />
      </PrivateRoute>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
