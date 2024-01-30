import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import {
  login_Signup_Request,
  getAllCourses,
  visitorPost,
  getAllCartItems,
} from "./Store/AsyncTasks.js";
import MainStore from "./Store/MainStore.js";
import CardSection from "./Components/CardSection.jsx";
import SignupLoginPage from "./Components/Signup_Login_components/SignupPage.jsx";
import WholeCoursePage from "./Components/WholeCoursePage.jsx";
import Cart from "./Components/Cart.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: getAllCartItems,
    children: [
      {
        path: "/",
        element: <CardSection />,
        loader: getAllCourses,
        action: visitorPost,
      },
      {
        path: "/signup",
        element: <SignupLoginPage />,
        action: login_Signup_Request,
      },
      { path: "/:id", element: <WholeCoursePage />, action: visitorPost },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={MainStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
