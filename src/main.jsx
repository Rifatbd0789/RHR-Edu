import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import Details from "./Components/Details";
import AOS from "aos";
import "aos/dist/aos.css";
import Provider from "./ContextProvider/Provider";
import Private from "./Components/Private";
import Blogs from "./Components/Blogs";
import ContactUs from "./Components/ContactUs";
import Error from "./Components/Error";

AOS.init();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/details/:id",
        element: (
          <Private>
            <Details></Details>
          </Private>
        ),
        loader: () => fetch("/data.json"),
      },
      {
        path: "/blogs",
        element: (
          <Private>
            <Blogs></Blogs>
          </Private>
        ),
        loader: () => fetch("/blog.json"),
      },
      {
        path: "/contact",
        element: (
          <Private>
            <ContactUs></ContactUs>,
          </Private>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
