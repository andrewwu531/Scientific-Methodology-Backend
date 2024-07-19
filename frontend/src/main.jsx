import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import Root from "./routes/root";
import Login from "./components/LoginSection";
import { paths } from "./shared/routes";
import "./index.css";
import Home from "./routes/home";
import Playlist from "./routes/playlist";
import MainSectionWrapper from "./components/MainSectionWrapper";
import PasswordResetForm from "./components/PasswordResetForm";
import CourseDetail from "./components/CourseDetails";
import Layout from "./components/Layout";

function PasswordResetWrapper() {
  const { uidb64, token } = useParams();
  return <PasswordResetForm uidb64={uidb64} token={token} />;
}

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />,
      children: [
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
          path: "/reset-password/:uidb64/:token",
          element: <PasswordResetWrapper />,
        },
        {
          path: "/:courseUrl",
          element: <CourseDetail backendURL="http://localhost:8000" />, // Pass necessary props
        },
        {
          path: paths.LOGIN,
          element: <Login setIsLoggedIn={setIsLoggedIn} />, // Pass necessary props
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
