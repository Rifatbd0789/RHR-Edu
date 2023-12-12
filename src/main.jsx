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
import AddBlog from "./Components/AddBlog";
import MyClass from "./Components/MyClass";

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
        loader: () => fetch("https://rhr-edu-backend.vercel.app/services"),
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
        path: "/details/:num",
        element: (
          <Private>
            <Details></Details>
          </Private>
        ),
        loader: () => fetch("https://rhr-edu-backend.vercel.app/services"),
      },
      {
        path: "/blogs",
        element: (
          <Private>
            <Blogs></Blogs>
          </Private>
        ),
        loader: () => fetch("https://rhr-edu-backend.vercel.app/blogs"),
      },
      {
        path: "/contact",
        element: (
          <Private>
            <ContactUs></ContactUs>,
          </Private>
        ),
      },
      {
        path: "/addBlog",
        element: (
          <Private>
            <AddBlog />,
          </Private>
        ),
      },
      {
        path: "/myClass",
        element: (
          <Private>
            <MyClass />,
          </Private>
        ),
        loader: () => fetch("https://rhr-edu-backend.vercel.app/myclass"),
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
