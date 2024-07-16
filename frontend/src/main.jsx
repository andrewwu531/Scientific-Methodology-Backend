import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import Root from "./routes/root";
import Login from "./routes/login";
import { paths } from "./shared/routes";
import "./index.css";
import Home from "./routes/home";
import Playlist from "./routes/playlist";
import MainSectionWrapper from "./components/MainSectionWrapper";
import PasswordResetForm from "./components/PasswordResetForm"; // Import the PasswordResetForm component
import CourseDetail from "./components/CourseDetails"; // Import the CourseDetail component

function PasswordResetWrapper() {
  const { uidb64, token } = useParams();
  return <PasswordResetForm uidb64={uidb64} token={token} />;
}

const router = createBrowserRouter([
  // {
  //   path: paths.LOGIN,
  //   element: <Login />,
  // },
  {
    path: paths.HOME,
    element: <Root />,
    children: [
      {
        path: paths.HOME,
        element: <Home />,
      },
    ],
  },
  {
    path: "/reset-password/:uidb64/:token", // Password reset route
    element: <PasswordResetWrapper />,
  },
  {
    path: "/:courseUrl", // Course detail route
    element: <CourseDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
