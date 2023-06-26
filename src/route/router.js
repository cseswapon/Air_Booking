import AdminRoute from "../AdminRoute/AdminRoute";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import AirTicket from "../pages/Dashboard/Booking/AirTicket/AirTicket";
import FlightPackage from "../pages/Dashboard/Commissions/FlightPackage/FlightPackage";
import HotelPackage from "../pages/Dashboard/Commissions/HotelPackage/HotelPackage";
import TotalSale from "../pages/Dashboard/Sale/TotalSale/TotalSale";
import Currency from "../pages/Dashboard/Setting/Currency/Currency";
import ProfileSetting from "../pages/Dashboard/Setting/ProfileSetting/ProfileSetting";
import Payment from "../pages/Dashboard/Transaction/Payment/Payment";
import Admin from "../pages/Dashboard/User/Admin/Admin";
import Agent from "../pages/Dashboard/User/Agent/Agent";
import NotFound from "../pages/NotFound/NotFound";
import SearchResult from "../pages/Trip/Flight/FlightType/SearchResult/SearchResult";
import FlightBooking from "../pages/Trip/FlightBooking/FlightBooking";
import SingleCard from "../pages/Trip/SingleCard/SingleCard";
import TicketBooking from "../pages/Trip/TicketBooking/TicketBooking";
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
    path: "flight/:id",
    element: (
      <PrivateRoute>
        <SingleCard />
      </PrivateRoute>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "flight/booking/:id",
    element: (
      <PrivateRoute>
        <FlightBooking />
      </PrivateRoute>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "flight/ticket/booking/:id",
    element: (
      <PrivateRoute>
        <TicketBooking />
      </PrivateRoute>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/register",
    element: (
      <PublicRoute>
        <Register />
      </PublicRoute>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/airTicket",
    element: (
      <PrivateRoute>
        <AirTicket />
      </PrivateRoute>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/payment",
    element: (
      <PrivateRoute>
        <Payment />
      </PrivateRoute>
    ),
    errorElement: <NotFound />,
  },

  {
    path: "/flightsPackages",
    element: (
      <AdminRoute>
        <FlightPackage />
      </AdminRoute>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/hotelPackages",
    element: (
      <AdminRoute>
        <HotelPackage />
      </AdminRoute>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/profileSettings",
    element: (
      <PrivateRoute>
        <ProfileSetting />
      </PrivateRoute>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/currency",
    element: (
      <PrivateRoute>
        <Currency />
      </PrivateRoute>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/totalSales",
    element: (
      <AdminRoute>
        <TotalSale />
      </AdminRoute>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/admins",
    element: (
      <AdminRoute>
        <Admin />
      </AdminRoute>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/agent",
    element: (
      <AdminRoute>
        <Agent />
      </AdminRoute>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
