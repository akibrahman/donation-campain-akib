import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import DonationDetails from "./Components/DonationDetails/DonationDetails";
import Donations from "./Components/Donations/Donations";
import Root from "./Components/Root/Root";
import Statistics from "./Components/Statistics/Statistics";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <App></App>,
      },
      {
        path: "/my-donations",
        element: <Donations></Donations>,
      },
      {
        path: "/my-statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/donation-details",
        element: <DonationDetails></DonationDetails>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
