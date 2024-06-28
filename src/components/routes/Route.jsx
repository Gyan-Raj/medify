import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/homePage/Home";
import MedicalCenters from "../pages/medicalCentersPage/MedicalCenters";
import MyBookings from "../pages/myBookings/MyBookings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/medical-centers",
        element: <MedicalCenters />,
      },
      {
        path: "/my-booking",
        element: <MyBookings />,
      },
    ],
  },
]);
