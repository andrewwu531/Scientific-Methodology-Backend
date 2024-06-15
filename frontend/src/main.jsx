import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Login from "./routes/login";
import { paths } from "./shared/routes";
import "./index.css";
import Home from "./routes/home";
import Playlist from "./routes/playlist";
import MainSectionWrapper from "./components/MainSectionWrapper";

const router = createBrowserRouter([
  {
    path: paths.LOGIN,
    element: <Login />,
  },
  {
    path: paths.HOME,
    element: <Root />,
    children: [
      {
        path: paths.HOME,
        element: <Home />,
      },
      {
        path: paths.PLAYLIST,
        element: <Playlist />,
      },
      {
        path: "/:category", // Dynamic route for course categories
        element: <MainSectionWrapper />, // Use a wrapper to handle fetching data
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
