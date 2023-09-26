import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import DonationDetails from "./Components/DonationDetails/DonationDetails";
import Donations from "./Components/Donations/Donations";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
// import Root from "./Components/Root/Root";
import NavBar from "./Components/NavBar/NavBar";
import Statistics from "./Components/Statistics/Statistics";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => fetch("/data.json"),
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/my-donations",
    loader: () => fetch("/data.json"),
    element: (
      <>
        <NavBar></NavBar>
        <Donations></Donations>
      </>
    ),
  },
  {
    path: "/my-statistics",
    loader: () => fetch("/data.json"),
    element: (
      <>
        <NavBar></NavBar>
        <Statistics></Statistics>
      </>
    ),
  },
  {
    path: "/donation-details/:id",
    loader: () => fetch("/data.json"),
    element: (
      <>
        <NavBar></NavBar>
        <DonationDetails></DonationDetails>
      </>
    ),
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
// const router = createBrowserRouter([
//   { path: "/", loader: () => fetch("/data.json"), element: <App></App> },
//   {
//     path: "/",
//     element: <Root></Root>,
//     errorElement: <ErrorPage></ErrorPage>,
//     children: [
//       {
//         path: "/my-donations",
//         element: <Donations></Donations>,
//       },
//       {
//         path: "/my-statistics",
//         element: <Statistics></Statistics>,
//       },
//       {
//         path: "/donation-details",
//         element: <DonationDetails></DonationDetails>,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
