import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import axios from "axios";
import Root from "./routes/root";
import LoginSection from "./components/LoginSection";
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
  const [userEmail, setUserEmail] = useState(null);
  const [user, setUser] = useState(null);
  const backendURL = "http://localhost:8000";

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) {
      setUserEmail(email);
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (userEmail) {
      axios
        .get(`${backendURL}/api/members/`)
        .then((response) => {
          const userData = response.data.find(
            (user) => user.email_address === userEmail
          );
          setUser(userData);
        })
        .catch((error) => console.error("Error fetching user data:", error));
    }
  }, [userEmail]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout
          setUserEmail={setUserEmail}
          setUser={setUser}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
      ),
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
          element: (
            <CourseDetail
              backendURL={backendURL}
              user={user}
              userEmail={userEmail}
            />
          ), // Pass necessary props
        },
        {
          path: paths.LOGIN,
          element: (
            <LoginSection
              setUserEmail={setUserEmail}
              setUser={setUser}
              setIsLoggedIn={setIsLoggedIn}
            />
          ), // Pass necessary props
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
