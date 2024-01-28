import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import CardSection from "./Components/CardSection.jsx";
import SignupLoginPage from "./Components/Signup_Login_components/SignupPage.jsx";
import WholeCoursePage from "./Components/WholeCoursePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <CardSection /> },
      {
        path: "/signup",
        element: <SignupLoginPage />,
      },
      { path: "/:id", element: <WholeCoursePage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
